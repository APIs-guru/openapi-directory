import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirestoreProjectsDatabasesDocumentsRollbackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;
}


export class FirestoreProjectsDatabasesDocumentsRollbackQueryParams extends SpeakeasyBase {
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


export class FirestoreProjectsDatabasesDocumentsRollbackSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirestoreProjectsDatabasesDocumentsRollbackSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirestoreProjectsDatabasesDocumentsRollbackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FirestoreProjectsDatabasesDocumentsRollbackSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FirestoreProjectsDatabasesDocumentsRollbackSecurityOption2;
}


export class FirestoreProjectsDatabasesDocumentsRollbackRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirestoreProjectsDatabasesDocumentsRollbackPathParams;

  @Metadata()
  queryParams: FirestoreProjectsDatabasesDocumentsRollbackQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.RollbackRequest;

  @Metadata()
  security: FirestoreProjectsDatabasesDocumentsRollbackSecurity;
}


export class FirestoreProjectsDatabasesDocumentsRollbackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
