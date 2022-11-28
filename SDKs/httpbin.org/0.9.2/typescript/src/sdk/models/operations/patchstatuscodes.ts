import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchStatusCodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=codes" })
  codes: string;
}


export class PatchStatusCodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchStatusCodesPathParams;
}


export class PatchStatusCodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
