import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Filter } from "./filter";


// PubSub
/** 
 * Pub/Sub specific notification config.
**/
export class PubSub extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=filter" })
  filter?: Filter;

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
