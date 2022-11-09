import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateLicenseeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=active;" })
  active: boolean;

  @Metadata({ data: "form, name=markedForTransfer;" })
  markedForTransfer?: boolean;

  @Metadata({ data: "form, name=name;" })
  name?: string;

  @Metadata({ data: "form, name=number;" })
  number?: string;

  @Metadata({ data: "form, name=productNumber;" })
  productNumber: string;
}


export class CreateLicenseeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateLicenseeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateLicenseeRequestBody;

  @Metadata()
  security: CreateLicenseeSecurity;
}


export class CreateLicenseeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
