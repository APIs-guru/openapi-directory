import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MailerGenericExporterConfigTypeEnum {
    Generic = "generic"
}


export class MailerGenericExporterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @Metadata({ data: "json, name=to" })
  to?: string[];

  @Metadata({ data: "json, name=type" })
  type: MailerGenericExporterConfigTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
