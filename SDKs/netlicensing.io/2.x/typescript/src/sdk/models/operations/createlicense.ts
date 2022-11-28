import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateLicenseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=active;" })
  active: boolean;

  @SpeakeasyMetadata({ data: "form, name=currency;" })
  currency?: string;

  @SpeakeasyMetadata({ data: "form, name=hidden;" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "form, name=licenseTemplateNumber;" })
  licenseTemplateNumber: string;

  @SpeakeasyMetadata({ data: "form, name=licenseeNumber;" })
  licenseeNumber: string;

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


export class CreateLicenseSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateLicenseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: CreateLicenseRequestBody;

  @SpeakeasyMetadata()
  security: CreateLicenseSecurity;
}


export class CreateLicenseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
