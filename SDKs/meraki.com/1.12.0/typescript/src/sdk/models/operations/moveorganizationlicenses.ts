import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MoveOrganizationLicensesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class MoveOrganizationLicensesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destOrganizationId" })
  destOrganizationId: string;

  @SpeakeasyMetadata({ data: "json, name=licenseIds" })
  licenseIds: string[];
}


export class MoveOrganizationLicensesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MoveOrganizationLicensesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: MoveOrganizationLicensesRequestBody;
}


export class MoveOrganizationLicensesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  moveOrganizationLicenses200ApplicationJsonObject?: Map<string, any>;
}
