import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ValidateLicenseePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=licenseeNumber" })
  licenseeNumber: string;
}

export enum ValidateLicenseeRequestBodyActionEnum {
    CheckOut = "checkOut"
,    CheckIn = "checkIn"
}


export class ValidateLicenseeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=action;" })
  action?: ValidateLicenseeRequestBodyActionEnum;

  @Metadata({ data: "form, name=licenseeName;" })
  licenseeName?: string;

  @Metadata({ data: "form, name=nodeSecret;" })
  nodeSecret?: string;

  @Metadata({ data: "form, name=productModuleNumber;" })
  productModuleNumber?: string;

  @Metadata({ data: "form, name=productNumber;" })
  productNumber?: string;

  @Metadata({ data: "form, name=sessionId;" })
  sessionId?: string;
}


export class ValidateLicenseeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class ValidateLicenseeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ValidateLicenseePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ValidateLicenseeRequestBody;

  @Metadata()
  security: ValidateLicenseeSecurity;
}


export class ValidateLicenseeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
