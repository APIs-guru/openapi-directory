import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSubscriptionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateSubscriptionRequest extends SpeakeasyBase {
    pathParams: UpdateSubscriptionPathParams;
    request: shared.SubscriptionInput;
}
export declare class UpdateSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
