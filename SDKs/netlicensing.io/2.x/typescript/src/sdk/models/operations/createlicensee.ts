import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateLicenseeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=active;" })
  active: boolean;

  @SpeakeasyMetadata({ data: "form, name=markedForTransfer;" })
  markedForTransfer?: boolean;

  @SpeakeasyMetadata({ data: "form, name=name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number?: string;

  @SpeakeasyMetadata({ data: "form, name=productNumber;" })
  productNumber: string;
}


export class CreateLicenseeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateLicenseeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateLicenseeRequestBody;

  @SpeakeasyMetadata()
  security: CreateLicenseeSecurity;
}


export class CreateLicenseeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
