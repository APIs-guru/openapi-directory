import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MailerGenericExporterConfigTypeEnum {
    Generic = "generic"
}
export declare class MailerGenericExporterConfig extends SpeakeasyBase {
    headers?: Map<string, string>;
    to?: string[];
    type: MailerGenericExporterConfigTypeEnum;
    url?: string;
}
