import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation" })
  conversation: string;
}


export class DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams extends SpeakeasyBase {
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


export class DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption2;
}


export class DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryPathParams;

  @Metadata()
  queryParams: DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest;

  @Metadata()
  security: DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity;
}


export class DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudDialogflowV2beta1SuggestConversationSummaryResponse?: shared.GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse;

  @Metadata()
  statusCode: number;
}
