import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RepositoryError } from "./repositoryerror";

export enum PushItemTypeEnum {
    Unspecified = "UNSPECIFIED"
,    Modified = "MODIFIED"
,    NotModified = "NOT_MODIFIED"
,    RepositoryError = "REPOSITORY_ERROR"
,    Requeue = "REQUEUE"
}


// PushItem
/** 
 * Represents an item to be pushed to the indexing queue.
**/
export class PushItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentHash" })
  contentHash?: string;

  @Metadata({ data: "json, name=metadataHash" })
  metadataHash?: string;

  @Metadata({ data: "json, name=payload" })
  payload?: string;

  @Metadata({ data: "json, name=queue" })
  queue?: string;

  @Metadata({ data: "json, name=repositoryError" })
  repositoryError?: RepositoryError;

  @Metadata({ data: "json, name=structuredDataHash" })
  structuredDataHash?: string;

  @Metadata({ data: "json, name=type" })
  type?: PushItemTypeEnum;
}
