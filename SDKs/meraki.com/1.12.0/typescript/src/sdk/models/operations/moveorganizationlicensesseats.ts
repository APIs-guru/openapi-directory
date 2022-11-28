import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MoveOrganizationLicensesSeatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class MoveOrganizationLicensesSeatsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destOrganizationId" })
  destOrganizationId: string;

  @SpeakeasyMetadata({ data: "json, name=licenseId" })
  licenseId: string;

  @SpeakeasyMetadata({ data: "json, name=seatCount" })
  seatCount: number;
}


export class MoveOrganizationLicensesSeatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MoveOrganizationLicensesSeatsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: MoveOrganizationLicensesSeatsRequestBody;
}


export class MoveOrganizationLicensesSeatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  moveOrganizationLicensesSeats200ApplicationJsonObject?: Map<string, any>;
}
