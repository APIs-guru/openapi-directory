import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DialogflowProjectsLocationsConversationProfilesCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class DialogflowProjectsLocationsConversationProfilesCreateQueryParams extends SpeakeasyBase {
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


export class DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DialogflowProjectsLocationsConversationProfilesCreateSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DialogflowProjectsLocationsConversationProfilesCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DialogflowProjectsLocationsConversationProfilesCreateSecurityOption2;
}


export class DialogflowProjectsLocationsConversationProfilesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DialogflowProjectsLocationsConversationProfilesCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: DialogflowProjectsLocationsConversationProfilesCreateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleCloudDialogflowV2beta1ConversationProfileInput;

  @SpeakeasyMetadata()
  security: DialogflowProjectsLocationsConversationProfilesCreateSecurity;
}


export class DialogflowProjectsLocationsConversationProfilesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudDialogflowV2beta1ConversationProfile?: shared.GoogleCloudDialogflowV2beta1ConversationProfile;

  @SpeakeasyMetadata()
  statusCode: number;
}
