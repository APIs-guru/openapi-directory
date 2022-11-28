import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DocsDocumentsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: string;
}

export enum DocsDocumentsGetSuggestionsViewModeEnum {
    DefaultForCurrentAccess = "DEFAULT_FOR_CURRENT_ACCESS",
    SuggestionsInline = "SUGGESTIONS_INLINE",
    PreviewSuggestionsAccepted = "PREVIEW_SUGGESTIONS_ACCEPTED",
    PreviewWithoutSuggestions = "PREVIEW_WITHOUT_SUGGESTIONS"
}


export class DocsDocumentsGetQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=suggestionsViewMode" })
  suggestionsViewMode?: DocsDocumentsGetSuggestionsViewModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DocsDocumentsGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DocsDocumentsGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DocsDocumentsGetSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DocsDocumentsGetSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DocsDocumentsGetSecurityOption5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DocsDocumentsGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DocsDocumentsGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DocsDocumentsGetSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: DocsDocumentsGetSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: DocsDocumentsGetSecurityOption4;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option5?: DocsDocumentsGetSecurityOption5;
}


export class DocsDocumentsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DocsDocumentsGetPathParams;

  @SpeakeasyMetadata()
  queryParams: DocsDocumentsGetQueryParams;

  @SpeakeasyMetadata()
  security: DocsDocumentsGetSecurity;
}


export class DocsDocumentsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  document?: shared.Document;

  @SpeakeasyMetadata()
  statusCode: number;
}
