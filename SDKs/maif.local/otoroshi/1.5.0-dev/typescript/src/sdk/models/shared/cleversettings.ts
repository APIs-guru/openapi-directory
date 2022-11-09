import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CleverSettings
/** 
 * Configuration for CleverCloud client
**/
export class CleverSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerKey" })
  consumerKey: string;

  @Metadata({ data: "json, name=consumerSecret" })
  consumerSecret: string;

  @Metadata({ data: "json, name=orgaId" })
  orgaId: string;

  @Metadata({ data: "json, name=secret" })
  secret: string;

  @Metadata({ data: "json, name=token" })
  token: string;
}
