import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudprofilerProjectsProfilesPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CloudprofilerProjectsProfilesPatchQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" })
  updateMask?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudprofilerProjectsProfilesPatchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudprofilerProjectsProfilesPatchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudprofilerProjectsProfilesPatchSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudprofilerProjectsProfilesPatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloudprofilerProjectsProfilesPatchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloudprofilerProjectsProfilesPatchSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: CloudprofilerProjectsProfilesPatchSecurityOption3;
}


export class CloudprofilerProjectsProfilesPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloudprofilerProjectsProfilesPatchPathParams;

  @Metadata()
  queryParams: CloudprofilerProjectsProfilesPatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Profile;

  @Metadata()
  security: CloudprofilerProjectsProfilesPatchSecurity;
}


export class CloudprofilerProjectsProfilesPatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  profile?: shared.Profile;

  @Metadata()
  statusCode: number;
}
