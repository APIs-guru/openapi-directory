import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MailerSendgridExporterConfigTypeEnum {
    Sendgrid = "sendgrid"
}


export class MailerSendgridExporterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeyPublic" })
  apiKeyPublic?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: MailerSendgridExporterConfigTypeEnum;
}
