import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateLicenseePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=licenseeNumber" })
  licenseeNumber: string;
}


export class UpdateLicenseeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=active;" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "form, name=markedForTransfer;" })
  markedForTransfer?: boolean;

  @SpeakeasyMetadata({ data: "form, name=name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number?: string;
}


export class UpdateLicenseeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class UpdateLicenseeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateLicenseePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateLicenseeRequestBody;

  @SpeakeasyMetadata()
  security: UpdateLicenseeSecurity;
}


export class UpdateLicenseeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
