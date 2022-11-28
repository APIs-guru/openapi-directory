import { SpeakeasyBase } from "../../../internal/utils";
import { ContextAttribute } from "./contextattribute";
import { Interaction } from "./interaction";
import { SearchQualityMetadata } from "./searchqualitymetadata";
/**
 * Available metadata fields for the item.
**/
export declare class ItemMetadata extends SpeakeasyBase {
    containerName?: string;
    contentLanguage?: string;
    contextAttributes?: ContextAttribute[];
    createTime?: string;
    hash?: string;
    interactions?: Interaction[];
    keywords?: string[];
    mimeType?: string;
    objectType?: string;
    searchQualityMetadata?: SearchQualityMetadata;
    sourceRepositoryUrl?: string;
    title?: string;
    updateTime?: string;
}
