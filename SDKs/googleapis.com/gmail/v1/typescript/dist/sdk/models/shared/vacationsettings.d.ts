import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Vacation auto-reply settings for an account. These settings correspond to the "Vacation responder" feature in the web interface.
**/
export declare class VacationSettings extends SpeakeasyBase {
    enableAutoReply?: boolean;
    endTime?: string;
    responseBodyHtml?: string;
    responseBodyPlainText?: string;
    responseSubject?: string;
    restrictToContacts?: boolean;
    restrictToDomain?: boolean;
    startTime?: string;
}
