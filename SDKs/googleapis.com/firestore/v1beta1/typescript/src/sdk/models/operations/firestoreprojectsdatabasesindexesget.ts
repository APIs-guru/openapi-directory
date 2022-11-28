import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FirestoreProjectsDatabasesIndexesGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class FirestoreProjectsDatabasesIndexesGetQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mask.fieldPaths" })
  maskFieldPaths?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transaction" })
  transaction?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class FirestoreProjectsDatabasesIndexesGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirestoreProjectsDatabasesIndexesGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirestoreProjectsDatabasesIndexesGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: FirestoreProjectsDatabasesIndexesGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: FirestoreProjectsDatabasesIndexesGetSecurityOption2;
}


export class FirestoreProjectsDatabasesIndexesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FirestoreProjectsDatabasesIndexesGetPathParams;

  @SpeakeasyMetadata()
  queryParams: FirestoreProjectsDatabasesIndexesGetQueryParams;

  @SpeakeasyMetadata()
  security: FirestoreProjectsDatabasesIndexesGetSecurity;
}


export class FirestoreProjectsDatabasesIndexesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleFirestoreAdminV1beta1Index?: shared.GoogleFirestoreAdminV1beta1Index;

  @SpeakeasyMetadata()
  statusCode: number;
}
