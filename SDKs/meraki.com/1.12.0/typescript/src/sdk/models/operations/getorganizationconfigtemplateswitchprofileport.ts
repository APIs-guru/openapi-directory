import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationConfigTemplateSwitchProfilePortPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configTemplateId" })
  configTemplateId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portId" })
  portId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}


export class GetOrganizationConfigTemplateSwitchProfilePortRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationConfigTemplateSwitchProfilePortPathParams;
}


export class GetOrganizationConfigTemplateSwitchProfilePortResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationConfigTemplateSwitchProfilePort200ApplicationJsonObject?: Map<string, any>;
}
