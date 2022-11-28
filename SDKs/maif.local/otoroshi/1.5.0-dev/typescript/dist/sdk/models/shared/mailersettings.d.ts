import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for mailgun api client
**/
export declare class MailerSettings extends SpeakeasyBase {
    apiKey: string;
    apiKeyPrivate?: string;
    apiKeyPublic?: string;
    domain: string;
    eu?: boolean;
    header?: Map<string, string>;
    type?: string;
    url?: string;
}
