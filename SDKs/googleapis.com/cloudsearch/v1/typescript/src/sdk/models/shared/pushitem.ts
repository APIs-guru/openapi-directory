import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepositoryError } from "./repositoryerror";


export enum PushItemTypeEnum {
    Unspecified = "UNSPECIFIED",
    Modified = "MODIFIED",
    NotModified = "NOT_MODIFIED",
    RepositoryError = "REPOSITORY_ERROR",
    Requeue = "REQUEUE"
}


// PushItem
/** 
 * Represents an item to be pushed to the indexing queue.
**/
export class PushItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentHash" })
  contentHash?: string;

  @SpeakeasyMetadata({ data: "json, name=metadataHash" })
  metadataHash?: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;

  @SpeakeasyMetadata({ data: "json, name=queue" })
  queue?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryError" })
  repositoryError?: RepositoryError;

  @SpeakeasyMetadata({ data: "json, name=structuredDataHash" })
  structuredDataHash?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PushItemTypeEnum;
}
