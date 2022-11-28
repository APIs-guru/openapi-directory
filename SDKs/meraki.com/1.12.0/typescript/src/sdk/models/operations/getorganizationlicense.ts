import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationLicensePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=licenseId" })
  licenseId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationLicenseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationLicensePathParams;
}


export class GetOrganizationLicenseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationLicense200ApplicationJsonObject?: Map<string, any>;
}
