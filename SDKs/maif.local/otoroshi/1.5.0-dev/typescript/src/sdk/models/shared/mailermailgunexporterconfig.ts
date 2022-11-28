import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MailerMailgunExporterConfigTypeEnum {
    Mailgun = "mailgun"
}


export class MailerMailgunExporterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=eu" })
  eu?: boolean;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: MailerMailgunExporterConfigTypeEnum;
}
