import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchInputSubscriptionBatchUpdateRequest;

  @Metadata()
  security: PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity;
}


export class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchResponseSubscriptionResponse?: shared.BatchResponseSubscriptionResponse;

  @Metadata()
  batchResponseSubscriptionResponseWithErrors?: shared.BatchResponseSubscriptionResponseWithErrors;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
