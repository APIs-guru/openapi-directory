import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirestoreProjectsDatabasesDocumentsCreateDocumentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
  collectionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=documentId" })
  documentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mask.fieldPaths" })
  maskFieldPaths?: string[];

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


export class FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption2;
}


export class FirestoreProjectsDatabasesDocumentsCreateDocumentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirestoreProjectsDatabasesDocumentsCreateDocumentPathParams;

  @Metadata()
  queryParams: FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Document;

  @Metadata()
  security: FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity;
}


export class FirestoreProjectsDatabasesDocumentsCreateDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  document?: shared.Document;

  @Metadata()
  statusCode: number;
}
