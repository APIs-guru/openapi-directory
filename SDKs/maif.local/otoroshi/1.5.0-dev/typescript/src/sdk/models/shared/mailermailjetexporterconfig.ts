import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MailerMailjetExporterConfigTypeEnum {
    Mailjet = "mailjet"
}


export class MailerMailjetExporterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeyPrivate" })
  apiKeyPrivate?: string;

  @SpeakeasyMetadata({ data: "json, name=apiKeyPublic" })
  apiKeyPublic?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: MailerMailjetExporterConfigTypeEnum;
}
