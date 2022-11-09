import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CollectionStatusItemLevelIssue } from "./collectionstatusitemlevelissue";
import { CollectionStatusDestinationStatus } from "./collectionstatusdestinationstatus";


// CollectionStatus
/** 
 * The collectionstatus message.
**/
export class CollectionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectionLevelIssuses", elemType: shared.CollectionStatusItemLevelIssue })
  collectionLevelIssuses?: CollectionStatusItemLevelIssue[];

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=destinationStatuses", elemType: shared.CollectionStatusDestinationStatus })
  destinationStatuses?: CollectionStatusDestinationStatus[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate?: string;
}
