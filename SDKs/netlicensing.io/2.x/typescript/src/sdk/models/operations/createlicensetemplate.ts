import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateLicenseTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=active;" })
  active: boolean;

  @SpeakeasyMetadata({ data: "form, name=automatic;" })
  automatic?: boolean;

  @SpeakeasyMetadata({ data: "form, name=currency;" })
  currency?: string;

  @SpeakeasyMetadata({ data: "form, name=hidden;" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "form, name=hideLicenses;" })
  hideLicenses?: boolean;

  @SpeakeasyMetadata({ data: "form, name=licenseType;" })
  licenseType: string;

  @SpeakeasyMetadata({ data: "form, name=maxSessions;" })
  maxSessions?: string;

  @SpeakeasyMetadata({ data: "form, name=name;" })
  name: string;

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number?: string;

  @SpeakeasyMetadata({ data: "form, name=price;" })
  price?: number;

  @SpeakeasyMetadata({ data: "form, name=productModuleNumber;" })
  productModuleNumber: string;

  @SpeakeasyMetadata({ data: "form, name=quantity;" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "form, name=quota;" })
  quota?: string;

  @SpeakeasyMetadata({ data: "form, name=timeVolume;" })
  timeVolume?: string;

  @SpeakeasyMetadata({ data: "form, name=timeVolumePeriod;" })
  timeVolumePeriod?: string;
}


export class CreateLicenseTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateLicenseTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: CreateLicenseTemplateRequestBody;

  @SpeakeasyMetadata()
  security: CreateLicenseTemplateSecurity;
}


export class CreateLicenseTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
