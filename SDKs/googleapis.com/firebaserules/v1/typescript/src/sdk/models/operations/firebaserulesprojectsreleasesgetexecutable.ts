import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirebaserulesProjectsReleasesGetExecutablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum {
    ReleaseExecutableVersionUnspecified = "RELEASE_EXECUTABLE_VERSION_UNSPECIFIED"
,    FirebaseRulesExecutableV1 = "FIREBASE_RULES_EXECUTABLE_V1"
,    FirebaseRulesExecutableV2 = "FIREBASE_RULES_EXECUTABLE_V2"
}


export class FirebaserulesProjectsReleasesGetExecutableQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=executableVersion" })
  executableVersion?: FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum;

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


export class FirebaserulesProjectsReleasesGetExecutableSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaserulesProjectsReleasesGetExecutableSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaserulesProjectsReleasesGetExecutableSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaserulesProjectsReleasesGetExecutableSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FirebaserulesProjectsReleasesGetExecutableSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FirebaserulesProjectsReleasesGetExecutableSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: FirebaserulesProjectsReleasesGetExecutableSecurityOption3;
}


export class FirebaserulesProjectsReleasesGetExecutableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirebaserulesProjectsReleasesGetExecutablePathParams;

  @Metadata()
  queryParams: FirebaserulesProjectsReleasesGetExecutableQueryParams;

  @Metadata()
  security: FirebaserulesProjectsReleasesGetExecutableSecurity;
}


export class FirebaserulesProjectsReleasesGetExecutableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getReleaseExecutableResponse?: shared.GetReleaseExecutableResponse;

  @Metadata()
  statusCode: number;
}
