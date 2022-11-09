import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TransferLicensesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=licenseeNumber" })
  licenseeNumber: string;
}


export class TransferLicensesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=sourceLicenseeNumber;" })
  sourceLicenseeNumber: string;
}


export class TransferLicensesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class TransferLicensesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TransferLicensesPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: TransferLicensesRequestBody;

  @Metadata()
  security: TransferLicensesSecurity;
}


export class TransferLicensesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
