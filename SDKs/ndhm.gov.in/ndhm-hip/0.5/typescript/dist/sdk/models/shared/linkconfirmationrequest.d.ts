import { SpeakeasyBase } from "../../../internal/utils";
export declare class LinkConfirmationRequestConfirmation extends SpeakeasyBase {
    linkRefNumber: string;
    token: string;
}
export declare class LinkConfirmationRequest extends SpeakeasyBase {
    confirmation: LinkConfirmationRequestConfirmation;
    requestId: string;
    timestamp: Date;
}
