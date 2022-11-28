import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FirebaserulesProjectsReleasesGetExecutablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum {
    ReleaseExecutableVersionUnspecified = "RELEASE_EXECUTABLE_VERSION_UNSPECIFIED",
    FirebaseRulesExecutableV1 = "FIREBASE_RULES_EXECUTABLE_V1",
    FirebaseRulesExecutableV2 = "FIREBASE_RULES_EXECUTABLE_V2"
}


export class FirebaserulesProjectsReleasesGetExecutableQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=executableVersion" })
  executableVersion?: FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class FirebaserulesProjectsReleasesGetExecutableSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaserulesProjectsReleasesGetExecutableSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaserulesProjectsReleasesGetExecutableSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebaserulesProjectsReleasesGetExecutableSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: FirebaserulesProjectsReleasesGetExecutableSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: FirebaserulesProjectsReleasesGetExecutableSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: FirebaserulesProjectsReleasesGetExecutableSecurityOption3;
}


export class FirebaserulesProjectsReleasesGetExecutableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FirebaserulesProjectsReleasesGetExecutablePathParams;

  @SpeakeasyMetadata()
  queryParams: FirebaserulesProjectsReleasesGetExecutableQueryParams;

  @SpeakeasyMetadata()
  security: FirebaserulesProjectsReleasesGetExecutableSecurity;
}


export class FirebaserulesProjectsReleasesGetExecutableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getReleaseExecutableResponse?: shared.GetReleaseExecutableResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
