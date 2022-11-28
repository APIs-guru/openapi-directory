import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";
export declare class ConsentRequestInitResponseConsentRequest extends SpeakeasyBase {
    id: string;
}
export declare class ConsentRequestInitResponse extends SpeakeasyBase {
    consentRequest?: ConsentRequestInitResponseConsentRequest;
    error?: Error;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
