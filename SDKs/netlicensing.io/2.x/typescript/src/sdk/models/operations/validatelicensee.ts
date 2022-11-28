import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ValidateLicenseePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=licenseeNumber" })
  licenseeNumber: string;
}

export enum ValidateLicenseeRequestBodyActionEnum {
    CheckOut = "checkOut",
    CheckIn = "checkIn"
}


export class ValidateLicenseeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=action;" })
  action?: ValidateLicenseeRequestBodyActionEnum;

  @SpeakeasyMetadata({ data: "form, name=licenseeName;" })
  licenseeName?: string;

  @SpeakeasyMetadata({ data: "form, name=nodeSecret;" })
  nodeSecret?: string;

  @SpeakeasyMetadata({ data: "form, name=productModuleNumber;" })
  productModuleNumber?: string;

  @SpeakeasyMetadata({ data: "form, name=productNumber;" })
  productNumber?: string;

  @SpeakeasyMetadata({ data: "form, name=sessionId;" })
  sessionId?: string;
}


export class ValidateLicenseeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class ValidateLicenseeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ValidateLicenseePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ValidateLicenseeRequestBody;

  @SpeakeasyMetadata()
  security: ValidateLicenseeSecurity;
}


export class ValidateLicenseeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
