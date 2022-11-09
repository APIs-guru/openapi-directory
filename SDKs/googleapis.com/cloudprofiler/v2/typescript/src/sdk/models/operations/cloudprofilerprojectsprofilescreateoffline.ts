import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudprofilerProjectsProfilesCreateOfflinePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class CloudprofilerProjectsProfilesCreateOfflineQueryParams extends SpeakeasyBase {
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
}


export class CloudprofilerProjectsProfilesCreateOfflineSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudprofilerProjectsProfilesCreateOfflineSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudprofilerProjectsProfilesCreateOfflineSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudprofilerProjectsProfilesCreateOfflineSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloudprofilerProjectsProfilesCreateOfflineSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloudprofilerProjectsProfilesCreateOfflineSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: CloudprofilerProjectsProfilesCreateOfflineSecurityOption3;
}


export class CloudprofilerProjectsProfilesCreateOfflineRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloudprofilerProjectsProfilesCreateOfflinePathParams;

  @Metadata()
  queryParams: CloudprofilerProjectsProfilesCreateOfflineQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Profile;

  @Metadata()
  security: CloudprofilerProjectsProfilesCreateOfflineSecurity;
}


export class CloudprofilerProjectsProfilesCreateOfflineResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  profile?: shared.Profile;

  @Metadata()
  statusCode: number;
}
