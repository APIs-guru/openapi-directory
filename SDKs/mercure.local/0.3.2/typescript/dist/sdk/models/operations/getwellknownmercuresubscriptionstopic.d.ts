import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetWellKnownMercureSubscriptionsTopicPathParams extends SpeakeasyBase {
    topic: string;
}
export declare class GetWellKnownMercureSubscriptionsTopicRequest extends SpeakeasyBase {
    pathParams: GetWellKnownMercureSubscriptionsTopicPathParams;
}
export declare class GetWellKnownMercureSubscriptionsTopicResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscriptions?: shared.Subscriptions;
}
