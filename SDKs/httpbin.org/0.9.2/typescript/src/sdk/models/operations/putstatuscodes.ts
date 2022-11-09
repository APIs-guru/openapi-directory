import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutStatusCodesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=codes" })
  codes: string;
}


export class PutStatusCodesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutStatusCodesPathParams;
}


export class PutStatusCodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
