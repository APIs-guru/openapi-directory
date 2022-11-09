import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLicenseTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=licenseTemplateNumber" })
  licenseTemplateNumber: string;
}


export class UpdateLicenseTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=active;" })
  active?: boolean;

  @Metadata({ data: "form, name=automatic;" })
  automatic?: boolean;

  @Metadata({ data: "form, name=currency;" })
  currency?: string;

  @Metadata({ data: "form, name=hidden;" })
  hidden?: boolean;

  @Metadata({ data: "form, name=hideLicenses;" })
  hideLicenses?: boolean;

  @Metadata({ data: "form, name=licenseType;" })
  licenseType?: string;

  @Metadata({ data: "form, name=maxSessions;" })
  maxSessions?: string;

  @Metadata({ data: "form, name=name;" })
  name?: string;

  @Metadata({ data: "form, name=number;" })
  number?: string;

  @Metadata({ data: "form, name=price;" })
  price?: number;

  @Metadata({ data: "form, name=quantity;" })
  quantity?: string;

  @Metadata({ data: "form, name=quota;" })
  quota?: string;

  @Metadata({ data: "form, name=timeVolume;" })
  timeVolume?: string;

  @Metadata({ data: "form, name=timeVolumePeriod;" })
  timeVolumePeriod?: string;
}


export class UpdateLicenseTemplateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class UpdateLicenseTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLicenseTemplatePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateLicenseTemplateRequestBody;

  @Metadata()
  security: UpdateLicenseTemplateSecurity;
}


export class UpdateLicenseTemplateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
