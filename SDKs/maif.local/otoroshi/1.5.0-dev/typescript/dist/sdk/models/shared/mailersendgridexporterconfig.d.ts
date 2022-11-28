import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MailerSendgridExporterConfigTypeEnum {
    Sendgrid = "sendgrid"
}
export declare class MailerSendgridExporterConfig extends SpeakeasyBase {
    apiKeyPublic?: string;
    to?: string[];
    type: MailerSendgridExporterConfigTypeEnum;
}
