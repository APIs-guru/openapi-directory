import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MailerConsoleExporterConfigTypeEnum {
    Generic = "generic"
}


export class MailerConsoleExporterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MailerConsoleExporterConfigTypeEnum;
}
