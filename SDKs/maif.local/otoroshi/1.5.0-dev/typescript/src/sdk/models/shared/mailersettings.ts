import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MailerSettings
/** 
 * Configuration for mailgun api client
**/
export class MailerSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey: string;

  @Metadata({ data: "json, name=apiKeyPrivate" })
  apiKeyPrivate?: string;

  @Metadata({ data: "json, name=apiKeyPublic" })
  apiKeyPublic?: string;

  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=eu" })
  eu?: boolean;

  @Metadata({ data: "json, name=header" })
  header?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
