import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MailerSendgridExporterConfigTypeEnum {
    Sendgrid = "sendgrid"
}


export class MailerSendgridExporterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKeyPublic" })
  apiKeyPublic?: string;

  @Metadata({ data: "json, name=to" })
  to?: string[];

  @Metadata({ data: "json, name=type" })
  type: MailerSendgridExporterConfigTypeEnum;
}
