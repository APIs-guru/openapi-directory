import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationConfigTemplateSwitchProfilePortPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configTemplateId" })
  configTemplateId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=portId" })
  portId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}


export class GetOrganizationConfigTemplateSwitchProfilePortRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationConfigTemplateSwitchProfilePortPathParams;
}


export class GetOrganizationConfigTemplateSwitchProfilePortResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationConfigTemplateSwitchProfilePort200ApplicationJsonObject?: Map<string, any>;
}
