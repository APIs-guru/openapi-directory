import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DocsDocumentsBatchUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: string;
}


export class DocsDocumentsBatchUpdateQueryParams extends SpeakeasyBase {
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


export class DocsDocumentsBatchUpdateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DocsDocumentsBatchUpdateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DocsDocumentsBatchUpdateSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DocsDocumentsBatchUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DocsDocumentsBatchUpdateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DocsDocumentsBatchUpdateSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DocsDocumentsBatchUpdateSecurityOption3;
}


export class DocsDocumentsBatchUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DocsDocumentsBatchUpdatePathParams;

  @Metadata()
  queryParams: DocsDocumentsBatchUpdateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchUpdateDocumentRequest;

  @Metadata()
  security: DocsDocumentsBatchUpdateSecurity;
}


export class DocsDocumentsBatchUpdateResponse extends SpeakeasyBase {
  @Metadata()
  batchUpdateDocumentResponse?: shared.BatchUpdateDocumentResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
