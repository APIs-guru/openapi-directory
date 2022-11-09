import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationLicensePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=licenseId" })
  licenseId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationLicenseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceSerial" })
  deviceSerial?: string;
}


export class UpdateOrganizationLicenseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationLicensePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationLicenseRequestBody;
}


export class UpdateOrganizationLicenseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationLicense200ApplicationJsonObject?: Map<string, any>;
}
