import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RenewOrganizationLicensesSeatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class RenewOrganizationLicensesSeatsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=licenseIdToRenew" })
  licenseIdToRenew: string;

  @SpeakeasyMetadata({ data: "json, name=unusedLicenseId" })
  unusedLicenseId: string;
}


export class RenewOrganizationLicensesSeatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RenewOrganizationLicensesSeatsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RenewOrganizationLicensesSeatsRequestBody;
}


export class RenewOrganizationLicensesSeatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  renewOrganizationLicensesSeats200ApplicationJsonObject?: Map<string, any>;
}
