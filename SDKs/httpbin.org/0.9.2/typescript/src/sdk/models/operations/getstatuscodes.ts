import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStatusCodesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=codes" })
  codes: string;
}


export class GetStatusCodesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStatusCodesPathParams;
}


export class GetStatusCodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
