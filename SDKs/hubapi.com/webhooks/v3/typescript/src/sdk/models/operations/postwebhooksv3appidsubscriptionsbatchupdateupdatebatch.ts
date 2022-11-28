import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchInputSubscriptionBatchUpdateRequest;

  @SpeakeasyMetadata()
  security: PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity;
}


export class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchResponseSubscriptionResponse?: shared.BatchResponseSubscriptionResponse;

  @SpeakeasyMetadata()
  batchResponseSubscriptionResponseWithErrors?: shared.BatchResponseSubscriptionResponseWithErrors;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
