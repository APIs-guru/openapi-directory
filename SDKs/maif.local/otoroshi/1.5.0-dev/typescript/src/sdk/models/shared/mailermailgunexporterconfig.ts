import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MailerMailgunExporterConfigTypeEnum {
    Mailgun = "mailgun"
}


export class MailerMailgunExporterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=eu" })
  eu?: boolean;

  @Metadata({ data: "json, name=to" })
  to?: string[];

  @Metadata({ data: "json, name=type" })
  type: MailerMailgunExporterConfigTypeEnum;
}
