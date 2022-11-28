import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MailerGenericExporterConfigTypeEnum {
    Generic = "generic"
}


export class MailerGenericExporterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: MailerGenericExporterConfigTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
