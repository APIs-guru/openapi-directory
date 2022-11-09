import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MailerMailjetExporterConfigTypeEnum {
    Mailjet = "mailjet"
}


export class MailerMailjetExporterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKeyPrivate" })
  apiKeyPrivate?: string;

  @Metadata({ data: "json, name=apiKeyPublic" })
  apiKeyPublic?: string;

  @Metadata({ data: "json, name=to" })
  to?: string[];

  @Metadata({ data: "json, name=type" })
  type: MailerMailjetExporterConfigTypeEnum;
}
