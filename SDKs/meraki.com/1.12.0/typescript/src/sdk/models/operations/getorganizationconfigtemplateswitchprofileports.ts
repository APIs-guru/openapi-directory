import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationConfigTemplateSwitchProfilePortsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configTemplateId" })
  configTemplateId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}


export class GetOrganizationConfigTemplateSwitchProfilePortsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationConfigTemplateSwitchProfilePortsPathParams;
}


export class GetOrganizationConfigTemplateSwitchProfilePortsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJsonObject?: Map<string, any>;
}
