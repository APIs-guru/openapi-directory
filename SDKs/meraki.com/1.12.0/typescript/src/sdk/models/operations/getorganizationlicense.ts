import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationLicensePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=licenseId" })
  licenseId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationLicenseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationLicensePathParams;
}


export class GetOrganizationLicenseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationLicense200ApplicationJsonObject?: Map<string, any>;
}
