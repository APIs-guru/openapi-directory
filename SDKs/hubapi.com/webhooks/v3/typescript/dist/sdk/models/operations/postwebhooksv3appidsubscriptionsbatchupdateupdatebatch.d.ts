import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchPathParams extends SpeakeasyBase {
    appId: number;
}
export declare class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest extends SpeakeasyBase {
    pathParams: PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchPathParams;
    request: shared.BatchInputSubscriptionBatchUpdateRequest;
    security: PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity;
}
export declare class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse extends SpeakeasyBase {
    batchResponseSubscriptionResponse?: shared.BatchResponseSubscriptionResponse;
    batchResponseSubscriptionResponseWithErrors?: shared.BatchResponseSubscriptionResponseWithErrors;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
