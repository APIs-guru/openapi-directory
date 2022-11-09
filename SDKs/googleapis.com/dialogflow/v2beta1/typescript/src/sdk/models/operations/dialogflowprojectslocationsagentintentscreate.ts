import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DialogflowProjectsLocationsAgentIntentsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum {
    IntentViewUnspecified = "INTENT_VIEW_UNSPECIFIED"
,    IntentViewFull = "INTENT_VIEW_FULL"
}


export class DialogflowProjectsLocationsAgentIntentsCreateQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=intentView" })
  intentView?: DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=languageCode" })
  languageCode?: string;

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


export class DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DialogflowProjectsLocationsAgentIntentsCreateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DialogflowProjectsLocationsAgentIntentsCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DialogflowProjectsLocationsAgentIntentsCreateSecurityOption2;
}


export class DialogflowProjectsLocationsAgentIntentsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DialogflowProjectsLocationsAgentIntentsCreatePathParams;

  @Metadata()
  queryParams: DialogflowProjectsLocationsAgentIntentsCreateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleCloudDialogflowV2beta1Intent;

  @Metadata()
  security: DialogflowProjectsLocationsAgentIntentsCreateSecurity;
}


export class DialogflowProjectsLocationsAgentIntentsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudDialogflowV2beta1Intent?: shared.GoogleCloudDialogflowV2beta1Intent;

  @Metadata()
  statusCode: number;
}
