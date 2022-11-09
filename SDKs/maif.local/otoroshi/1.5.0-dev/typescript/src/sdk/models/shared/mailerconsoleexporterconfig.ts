import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MailerConsoleExporterConfigTypeEnum {
    Generic = "generic"
}


export class MailerConsoleExporterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: MailerConsoleExporterConfigTypeEnum;
}
