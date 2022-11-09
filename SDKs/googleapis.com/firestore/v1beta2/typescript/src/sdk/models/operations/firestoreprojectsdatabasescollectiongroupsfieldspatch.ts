import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirestoreProjectsDatabasesCollectionGroupsFieldsPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams extends SpeakeasyBase {
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


export class FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption2;
}


export class FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirestoreProjectsDatabasesCollectionGroupsFieldsPatchPathParams;

  @Metadata()
  queryParams: FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleFirestoreAdminV1beta2Field;

  @Metadata()
  security: FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity;
}


export class FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleLongrunningOperation?: shared.GoogleLongrunningOperation;

  @Metadata()
  statusCode: number;
}
