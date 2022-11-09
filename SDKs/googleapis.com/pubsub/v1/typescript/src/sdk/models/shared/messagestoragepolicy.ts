import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MessageStoragePolicy
/** 
 * A policy constraining the storage of messages published to the topic.
**/
export class MessageStoragePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedPersistenceRegions" })
  allowedPersistenceRegions?: string[];
}
