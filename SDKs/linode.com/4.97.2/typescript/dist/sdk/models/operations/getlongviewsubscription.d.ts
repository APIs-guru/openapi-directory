import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLongviewSubscriptionPathParams extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class GetLongviewSubscriptionDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLongviewSubscriptionRequest extends SpeakeasyBase {
    pathParams: GetLongviewSubscriptionPathParams;
}
export declare class GetLongviewSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    longviewSubscription?: shared.LongviewSubscription;
    statusCode: number;
    getLongviewSubscriptionDefaultApplicationJsonObject?: GetLongviewSubscriptionDefaultApplicationJson;
}
