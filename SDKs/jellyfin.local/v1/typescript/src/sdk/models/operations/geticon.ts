import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetIconPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileName" })
  fileName: string;
}


export class GetIconRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIconPathParams;
}


export class GetIconResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getIcon200ImageWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
