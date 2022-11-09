import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLicensePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=licenseNumber" })
  licenseNumber: string;
}


export class UpdateLicenseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=active;" })
  active?: boolean;

  @Metadata({ data: "form, name=currency;" })
  currency?: string;

  @Metadata({ data: "form, name=hidden;" })
  hidden?: boolean;

  @Metadata({ data: "form, name=name;" })
  name?: string;

  @Metadata({ data: "form, name=number;" })
  number?: string;

  @Metadata({ data: "form, name=parentfeature;" })
  parentfeature?: string;

  @Metadata({ data: "form, name=price;" })
  price?: number;

  @Metadata({ data: "form, name=quantity;" })
  quantity?: string;

  @Metadata({ data: "form, name=startDate;" })
  startDate?: Date;

  @Metadata({ data: "form, name=timeVolume;" })
  timeVolume?: string;

  @Metadata({ data: "form, name=timeVolumePeriod;" })
  timeVolumePeriod?: string;

  @Metadata({ data: "form, name=usedQuantity;" })
  usedQuantity?: string;
}


export class UpdateLicenseSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class UpdateLicenseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLicensePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateLicenseRequestBody;

  @Metadata()
  security: UpdateLicenseSecurity;
}


export class UpdateLicenseResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
