import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchStatusCodesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=codes" })
  codes: string;
}


export class PatchStatusCodesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchStatusCodesPathParams;
}


export class PatchStatusCodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
