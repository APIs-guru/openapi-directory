import { SpeakeasyBase } from "../../../internal/utils";
import { ShareProfileAcknowledgement } from "./shareprofileacknowledgement";
import { Error } from "./error";
import { RequestReference } from "./requestreference";
export declare class ShareProfileResult extends SpeakeasyBase {
    acknowledgement: ShareProfileAcknowledgement;
    error?: Error;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
