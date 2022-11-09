import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Topic
/** 
 * A Pub/Sub topic which Secret Manager will publish to when control plane events occur on this secret.
**/
export class Topic extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
