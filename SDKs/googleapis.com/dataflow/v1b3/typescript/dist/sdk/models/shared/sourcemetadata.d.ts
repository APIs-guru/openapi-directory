import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata about a Source useful for automatically optimizing and tuning the pipeline, etc.
**/
export declare class SourceMetadata extends SpeakeasyBase {
    estimatedSizeBytes?: string;
    infinite?: boolean;
    producesSortedKeys?: boolean;
}
