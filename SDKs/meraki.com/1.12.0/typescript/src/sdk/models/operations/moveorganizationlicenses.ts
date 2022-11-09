import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MoveOrganizationLicensesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class MoveOrganizationLicensesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=destOrganizationId" })
  destOrganizationId: string;

  @Metadata({ data: "json, name=licenseIds" })
  licenseIds: string[];
}


export class MoveOrganizationLicensesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MoveOrganizationLicensesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: MoveOrganizationLicensesRequestBody;
}


export class MoveOrganizationLicensesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  moveOrganizationLicenses200ApplicationJsonObject?: Map<string, any>;
}
