import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MoveOrganizationLicensesSeatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class MoveOrganizationLicensesSeatsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=destOrganizationId" })
  destOrganizationId: string;

  @Metadata({ data: "json, name=licenseId" })
  licenseId: string;

  @Metadata({ data: "json, name=seatCount" })
  seatCount: number;
}


export class MoveOrganizationLicensesSeatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MoveOrganizationLicensesSeatsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: MoveOrganizationLicensesSeatsRequestBody;
}


export class MoveOrganizationLicensesSeatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  moveOrganizationLicensesSeats200ApplicationJsonObject?: Map<string, any>;
}
