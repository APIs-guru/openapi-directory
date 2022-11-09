import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RenewOrganizationLicensesSeatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class RenewOrganizationLicensesSeatsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=licenseIdToRenew" })
  licenseIdToRenew: string;

  @Metadata({ data: "json, name=unusedLicenseId" })
  unusedLicenseId: string;
}


export class RenewOrganizationLicensesSeatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RenewOrganizationLicensesSeatsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RenewOrganizationLicensesSeatsRequestBody;
}


export class RenewOrganizationLicensesSeatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  renewOrganizationLicensesSeats200ApplicationJsonObject?: Map<string, any>;
}
