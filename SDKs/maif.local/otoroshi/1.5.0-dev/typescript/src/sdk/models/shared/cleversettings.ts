import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CleverSettings
/** 
 * Configuration for CleverCloud client
**/
export class CleverSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerKey" })
  consumerKey: string;

  @SpeakeasyMetadata({ data: "json, name=consumerSecret" })
  consumerSecret: string;

  @SpeakeasyMetadata({ data: "json, name=orgaId" })
  orgaId: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}
