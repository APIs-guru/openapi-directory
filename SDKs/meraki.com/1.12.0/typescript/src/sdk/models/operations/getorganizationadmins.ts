import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationAdminsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationAdminsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationAdminsPathParams;
}


export class GetOrganizationAdminsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationAdmins200ApplicationJsonObject?: Map<string, any>;
}
