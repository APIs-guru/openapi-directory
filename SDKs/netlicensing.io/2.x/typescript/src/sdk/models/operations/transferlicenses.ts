import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TransferLicensesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=licenseeNumber" })
  licenseeNumber: string;
}


export class TransferLicensesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=sourceLicenseeNumber;" })
  sourceLicenseeNumber: string;
}


export class TransferLicensesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class TransferLicensesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TransferLicensesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: TransferLicensesRequestBody;

  @SpeakeasyMetadata()
  security: TransferLicensesSecurity;
}


export class TransferLicensesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
