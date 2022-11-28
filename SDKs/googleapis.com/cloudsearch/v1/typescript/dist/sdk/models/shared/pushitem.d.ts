import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryError } from "./repositoryerror";
export declare enum PushItemTypeEnum {
    Unspecified = "UNSPECIFIED",
    Modified = "MODIFIED",
    NotModified = "NOT_MODIFIED",
    RepositoryError = "REPOSITORY_ERROR",
    Requeue = "REQUEUE"
}
/**
 * Represents an item to be pushed to the indexing queue.
**/
export declare class PushItem extends SpeakeasyBase {
    contentHash?: string;
    metadataHash?: string;
    payload?: string;
    queue?: string;
    repositoryError?: RepositoryError;
    structuredDataHash?: string;
    type?: PushItemTypeEnum;
}
