import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Template for an email template.
**/
export declare class EmailTemplate extends SpeakeasyBase {
    body?: string;
    format?: string;
    from?: string;
    fromDisplayName?: string;
    replyTo?: string;
    subject?: string;
}
