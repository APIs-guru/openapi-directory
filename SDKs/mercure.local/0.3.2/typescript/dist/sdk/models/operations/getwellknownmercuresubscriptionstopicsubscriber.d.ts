import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetWellKnownMercureSubscriptionsTopicSubscriberPathParams extends SpeakeasyBase {
    subscriber: string;
    topic: string;
}
export declare class GetWellKnownMercureSubscriptionsTopicSubscriberRequest extends SpeakeasyBase {
    pathParams: GetWellKnownMercureSubscriptionsTopicSubscriberPathParams;
}
export declare class GetWellKnownMercureSubscriptionsTopicSubscriberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscriptions?: shared.Subscriptions;
}
