import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResourcesettingsProjectsSettingsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum ResourcesettingsProjectsSettingsListViewEnum {
    SettingViewUnspecified = "SETTING_VIEW_UNSPECIFIED",
    SettingViewBasic = "SETTING_VIEW_BASIC",
    SettingViewEffectiveValue = "SETTING_VIEW_EFFECTIVE_VALUE",
    SettingViewLocalValue = "SETTING_VIEW_LOCAL_VALUE"
}


export class ResourcesettingsProjectsSettingsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: ResourcesettingsProjectsSettingsListViewEnum;
}


export class ResourcesettingsProjectsSettingsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ResourcesettingsProjectsSettingsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResourcesettingsProjectsSettingsListPathParams;

  @SpeakeasyMetadata()
  queryParams: ResourcesettingsProjectsSettingsListQueryParams;

  @SpeakeasyMetadata()
  security: ResourcesettingsProjectsSettingsListSecurity;
}


export class ResourcesettingsProjectsSettingsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudResourcesettingsV1ListSettingsResponse?: shared.GoogleCloudResourcesettingsV1ListSettingsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
