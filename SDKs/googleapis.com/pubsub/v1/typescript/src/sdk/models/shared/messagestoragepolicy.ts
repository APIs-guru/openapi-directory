import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MessageStoragePolicy
/** 
 * A policy constraining the storage of messages published to the topic.
**/
export class MessageStoragePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedPersistenceRegions" })
  allowedPersistenceRegions?: string[];
}
