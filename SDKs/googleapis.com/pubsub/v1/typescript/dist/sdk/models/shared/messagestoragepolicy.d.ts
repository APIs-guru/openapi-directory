import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A policy constraining the storage of messages published to the topic.
**/
export declare class MessageStoragePolicy extends SpeakeasyBase {
    allowedPersistenceRegions?: string[];
}
