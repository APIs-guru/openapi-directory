import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFilePaymentsFilePaymentIdPaymentDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FilePaymentId" })
  filePaymentId: string;
}


export class GetFilePaymentsFilePaymentIdPaymentDetailsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" })
  xCustomerUserAgent?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" })
  xFapiAuthDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" })
  xFapiCustomerIpAddress?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" })
  xFapiInteractionId?: string;
}


export class GetFilePaymentsFilePaymentIdPaymentDetailsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetFilePaymentsFilePaymentIdPaymentDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFilePaymentsFilePaymentIdPaymentDetailsPathParams;

  @Metadata()
  headers: GetFilePaymentsFilePaymentIdPaymentDetailsHeaders;

  @Metadata()
  security: GetFilePaymentsFilePaymentIdPaymentDetailsSecurity;
}


export class GetFilePaymentsFilePaymentIdPaymentDetailsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obWritePaymentDetailsResponse1?: shared.ObWritePaymentDetailsResponse1;

  @Metadata()
  statusCode: number;
}
