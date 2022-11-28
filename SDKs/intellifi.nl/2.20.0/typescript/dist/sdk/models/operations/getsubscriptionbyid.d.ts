import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSubscriptionByIdRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionByIdPathParams;
}
export declare class GetSubscriptionByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
