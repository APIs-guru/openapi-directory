import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MailerMailgunExporterConfigTypeEnum {
    Mailgun = "mailgun"
}
export declare class MailerMailgunExporterConfig extends SpeakeasyBase {
    apiKey?: string;
    domain?: string;
    eu?: boolean;
    to?: string[];
    type: MailerMailgunExporterConfigTypeEnum;
}
