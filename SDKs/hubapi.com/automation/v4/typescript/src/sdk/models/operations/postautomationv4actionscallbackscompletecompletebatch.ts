import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurityOption2;
}


export class PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchInputCallbackCompletionBatchRequest;

  @Metadata()
  security: PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity;
}


export class PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
