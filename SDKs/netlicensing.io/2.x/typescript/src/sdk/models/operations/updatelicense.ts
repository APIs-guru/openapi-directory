import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateLicensePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=licenseNumber" })
  licenseNumber: string;
}


export class UpdateLicenseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=active;" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "form, name=currency;" })
  currency?: string;

  @SpeakeasyMetadata({ data: "form, name=hidden;" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "form, name=name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number?: string;

  @SpeakeasyMetadata({ data: "form, name=parentfeature;" })
  parentfeature?: string;

  @SpeakeasyMetadata({ data: "form, name=price;" })
  price?: number;

  @SpeakeasyMetadata({ data: "form, name=quantity;" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "form, name=startDate;" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "form, name=timeVolume;" })
  timeVolume?: string;

  @SpeakeasyMetadata({ data: "form, name=timeVolumePeriod;" })
  timeVolumePeriod?: string;

  @SpeakeasyMetadata({ data: "form, name=usedQuantity;" })
  usedQuantity?: string;
}


export class UpdateLicenseSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class UpdateLicenseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateLicensePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateLicenseRequestBody;

  @SpeakeasyMetadata()
  security: UpdateLicenseSecurity;
}


export class UpdateLicenseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
