import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFilePaymentsFilePaymentIdReportFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FilePaymentId" })
  filePaymentId: string;
}


export class GetFilePaymentsFilePaymentIdReportFileHeaders extends SpeakeasyBase {
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


export class GetFilePaymentsFilePaymentIdReportFileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetFilePaymentsFilePaymentIdReportFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFilePaymentsFilePaymentIdReportFilePathParams;

  @Metadata()
  headers: GetFilePaymentsFilePaymentIdReportFileHeaders;

  @Metadata()
  security: GetFilePaymentsFilePaymentIdReportFileSecurity;
}


export class GetFilePaymentsFilePaymentIdReportFileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  file?: Map<string, any>;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  statusCode: number;
}
