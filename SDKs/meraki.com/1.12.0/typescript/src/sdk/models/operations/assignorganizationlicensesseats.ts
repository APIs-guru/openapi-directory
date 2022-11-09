import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssignOrganizationLicensesSeatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class AssignOrganizationLicensesSeatsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=licenseId" })
  licenseId: string;

  @Metadata({ data: "json, name=networkId" })
  networkId: string;

  @Metadata({ data: "json, name=seatCount" })
  seatCount: number;
}


export class AssignOrganizationLicensesSeatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AssignOrganizationLicensesSeatsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AssignOrganizationLicensesSeatsRequestBody;
}


export class AssignOrganizationLicensesSeatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  assignOrganizationLicensesSeats200ApplicationJsonObject?: Map<string, any>;
}
