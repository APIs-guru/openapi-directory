import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CollectionStatusItemLevelIssue } from "./collectionstatusitemlevelissue";
import { CollectionStatusDestinationStatus } from "./collectionstatusdestinationstatus";



// CollectionStatus
/** 
 * The collectionstatus message.
**/
export class CollectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collectionLevelIssuses", elemType: CollectionStatusItemLevelIssue })
  collectionLevelIssuses?: CollectionStatusItemLevelIssue[];

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationStatuses", elemType: CollectionStatusDestinationStatus })
  destinationStatuses?: CollectionStatusDestinationStatus[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate?: string;
}
