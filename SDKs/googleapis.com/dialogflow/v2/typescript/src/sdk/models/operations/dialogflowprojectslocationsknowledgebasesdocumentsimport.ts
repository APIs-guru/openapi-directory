import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DialogflowProjectsLocationsKnowledgeBasesDocumentsImportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class DialogflowProjectsLocationsKnowledgeBasesDocumentsImportQueryParams extends SpeakeasyBase {
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


export class DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption2;
}


export class DialogflowProjectsLocationsKnowledgeBasesDocumentsImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DialogflowProjectsLocationsKnowledgeBasesDocumentsImportPathParams;

  @SpeakeasyMetadata()
  queryParams: DialogflowProjectsLocationsKnowledgeBasesDocumentsImportQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleCloudDialogflowV2ImportDocumentsRequest;

  @SpeakeasyMetadata()
  security: DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurity;
}


export class DialogflowProjectsLocationsKnowledgeBasesDocumentsImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleLongrunningOperation?: shared.GoogleLongrunningOperation;

  @SpeakeasyMetadata()
  statusCode: number;
}
