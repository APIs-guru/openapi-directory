import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationConfigTemplateSwitchProfilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configTemplateId" })
  configTemplateId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationConfigTemplateSwitchProfilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationConfigTemplateSwitchProfilesPathParams;
}


export class GetOrganizationConfigTemplateSwitchProfilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationConfigTemplateSwitchProfiles200ApplicationJsonObject?: Map<string, any>;
}
