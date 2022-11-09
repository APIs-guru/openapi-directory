import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLicenseePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=licenseeNumber" })
  licenseeNumber: string;
}


export class UpdateLicenseeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=active;" })
  active?: boolean;

  @Metadata({ data: "form, name=markedForTransfer;" })
  markedForTransfer?: boolean;

  @Metadata({ data: "form, name=name;" })
  name?: string;

  @Metadata({ data: "form, name=number;" })
  number?: string;
}


export class UpdateLicenseeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class UpdateLicenseeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLicenseePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateLicenseeRequestBody;

  @Metadata()
  security: UpdateLicenseeSecurity;
}


export class UpdateLicenseeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
