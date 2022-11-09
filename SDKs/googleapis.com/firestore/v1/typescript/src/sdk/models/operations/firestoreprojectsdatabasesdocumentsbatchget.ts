import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirestoreProjectsDatabasesDocumentsBatchGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;
}


export class FirestoreProjectsDatabasesDocumentsBatchGetQueryParams extends SpeakeasyBase {
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


export class FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirestoreProjectsDatabasesDocumentsBatchGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2;
}


export class FirestoreProjectsDatabasesDocumentsBatchGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirestoreProjectsDatabasesDocumentsBatchGetPathParams;

  @Metadata()
  queryParams: FirestoreProjectsDatabasesDocumentsBatchGetQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchGetDocumentsRequest;

  @Metadata()
  security: FirestoreProjectsDatabasesDocumentsBatchGetSecurity;
}


export class FirestoreProjectsDatabasesDocumentsBatchGetResponse extends SpeakeasyBase {
  @Metadata()
  batchGetDocumentsResponse?: shared.BatchGetDocumentsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
