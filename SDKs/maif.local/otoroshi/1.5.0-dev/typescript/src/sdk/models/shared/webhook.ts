import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Webhook
/** 
 * A callback URL where events are posted
**/
export class Webhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
