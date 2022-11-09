import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetIconPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileName" })
  fileName: string;
}


export class GetIconRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIconPathParams;
}


export class GetIconResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getIcon200ImageWildcardBinaryString?: Uint8Array;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
