import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MailerSettings
/** 
 * Configuration for mailgun api client
**/
export class MailerSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "json, name=apiKeyPrivate" })
  apiKeyPrivate?: string;

  @SpeakeasyMetadata({ data: "json, name=apiKeyPublic" })
  apiKeyPublic?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=eu" })
  eu?: boolean;

  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
