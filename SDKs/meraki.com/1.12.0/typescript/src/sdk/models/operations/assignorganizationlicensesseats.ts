import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssignOrganizationLicensesSeatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class AssignOrganizationLicensesSeatsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=licenseId" })
  licenseId: string;

  @SpeakeasyMetadata({ data: "json, name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "json, name=seatCount" })
  seatCount: number;
}


export class AssignOrganizationLicensesSeatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AssignOrganizationLicensesSeatsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AssignOrganizationLicensesSeatsRequestBody;
}


export class AssignOrganizationLicensesSeatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  assignOrganizationLicensesSeats200ApplicationJsonObject?: Map<string, any>;
}
