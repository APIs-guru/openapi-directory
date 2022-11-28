import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MailerMailjetExporterConfigTypeEnum {
    Mailjet = "mailjet"
}
export declare class MailerMailjetExporterConfig extends SpeakeasyBase {
    apiKeyPrivate?: string;
    apiKeyPublic?: string;
    to?: string[];
    type: MailerMailjetExporterConfigTypeEnum;
}
