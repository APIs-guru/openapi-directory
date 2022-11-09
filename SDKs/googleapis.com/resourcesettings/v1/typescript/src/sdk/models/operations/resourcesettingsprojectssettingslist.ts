import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResourcesettingsProjectsSettingsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum ResourcesettingsProjectsSettingsListViewEnum {
    SettingViewUnspecified = "SETTING_VIEW_UNSPECIFIED"
,    SettingViewBasic = "SETTING_VIEW_BASIC"
,    SettingViewEffectiveValue = "SETTING_VIEW_EFFECTIVE_VALUE"
,    SettingViewLocalValue = "SETTING_VIEW_LOCAL_VALUE"
}


export class ResourcesettingsProjectsSettingsListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: ResourcesettingsProjectsSettingsListViewEnum;
}


export class ResourcesettingsProjectsSettingsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ResourcesettingsProjectsSettingsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResourcesettingsProjectsSettingsListPathParams;

  @Metadata()
  queryParams: ResourcesettingsProjectsSettingsListQueryParams;

  @Metadata()
  security: ResourcesettingsProjectsSettingsListSecurity;
}


export class ResourcesettingsProjectsSettingsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudResourcesettingsV1ListSettingsResponse?: shared.GoogleCloudResourcesettingsV1ListSettingsResponse;

  @Metadata()
  statusCode: number;
}
