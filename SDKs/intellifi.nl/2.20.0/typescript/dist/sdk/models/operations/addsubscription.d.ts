import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddSubscriptionRequest extends SpeakeasyBase {
    request: shared.SubscriptionInput;
}
export declare class AddSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
