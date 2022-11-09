import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Webhook
/** 
 * A callback URL where events are posted
**/
export class Webhook extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers" })
  headers: Map<string, string>;

  @Metadata({ data: "json, name=url" })
  url: string;
}
