import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResourcesettingsProjectsSettingsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum ResourcesettingsProjectsSettingsGetViewEnum {
    SettingViewUnspecified = "SETTING_VIEW_UNSPECIFIED"
,    SettingViewBasic = "SETTING_VIEW_BASIC"
,    SettingViewEffectiveValue = "SETTING_VIEW_EFFECTIVE_VALUE"
,    SettingViewLocalValue = "SETTING_VIEW_LOCAL_VALUE"
}


export class ResourcesettingsProjectsSettingsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: ResourcesettingsProjectsSettingsGetViewEnum;
}


export class ResourcesettingsProjectsSettingsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ResourcesettingsProjectsSettingsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResourcesettingsProjectsSettingsGetPathParams;

  @Metadata()
  queryParams: ResourcesettingsProjectsSettingsGetQueryParams;

  @Metadata()
  security: ResourcesettingsProjectsSettingsGetSecurity;
}


export class ResourcesettingsProjectsSettingsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudResourcesettingsV1Setting?: shared.GoogleCloudResourcesettingsV1Setting;

  @Metadata()
  statusCode: number;
}
