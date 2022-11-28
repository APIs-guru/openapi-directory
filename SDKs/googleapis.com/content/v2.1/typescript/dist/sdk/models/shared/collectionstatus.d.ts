import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionStatusItemLevelIssue } from "./collectionstatusitemlevelissue";
import { CollectionStatusDestinationStatus } from "./collectionstatusdestinationstatus";
/**
 * The collectionstatus message.
**/
export declare class CollectionStatus extends SpeakeasyBase {
    collectionLevelIssuses?: CollectionStatusItemLevelIssue[];
    creationDate?: string;
    destinationStatuses?: CollectionStatusDestinationStatus[];
    id?: string;
    lastUpdateDate?: string;
}
