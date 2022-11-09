import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BuyANumberRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.NumberDetails;
}


export class BuyANumberResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  response?: shared.Response;

  @Metadata()
  response420?: shared.Response420;

  @Metadata()
  unauthorized?: shared.Unauthorized;
}
