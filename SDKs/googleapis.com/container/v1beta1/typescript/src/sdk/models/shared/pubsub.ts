import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";



// PubSub
/** 
 * Pub/Sub specific notification config.
**/
export class PubSub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: Filter;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
