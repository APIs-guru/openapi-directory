import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckAvailabilityOfFundsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Digest" })
  digest?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Signature" })
  signature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" })
  tppSignatureCertificate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Request-ID" })
  xRequestId: string;
}


export class CheckAvailabilityOfFundsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}


export class CheckAvailabilityOfFundsRequest extends SpeakeasyBase {
  @Metadata()
  headers: CheckAvailabilityOfFundsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ConfirmationOfFunds;

  @Metadata()
  security: CheckAvailabilityOfFundsSecurity;
}


// CheckAvailabilityOfFunds200ApplicationJson
/** 
 * Equals "true" if sufficient funds are available at the time of the request,
 * "false" otherwise.
 * 
**/
export class CheckAvailabilityOfFunds200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=fundsAvailable" })
  fundsAvailable: boolean;
}


export class CheckAvailabilityOfFundsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error400Ais?: shared.Error400Ais;

  @Metadata()
  error400NgAis?: shared.Error400NgAis;

  @Metadata()
  error401NgPiis?: shared.Error401NgPiis;

  @Metadata()
  error401Piis?: shared.Error401Piis;

  @Metadata()
  error403NgPiis?: shared.Error403NgPiis;

  @Metadata()
  error403Piis?: shared.Error403Piis;

  @Metadata()
  error404NgPiis?: shared.Error404NgPiis;

  @Metadata()
  error404Piis?: shared.Error404Piis;

  @Metadata()
  error405NgPiis?: shared.Error405NgPiis;

  @Metadata()
  error405Piis?: shared.Error405Piis;

  @Metadata()
  error409NgPiis?: shared.Error409NgPiis;

  @Metadata()
  error409Piis?: shared.Error409Piis;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  checkAvailabilityOfFunds200ApplicationJsonObject?: CheckAvailabilityOfFunds200ApplicationJson;
}
