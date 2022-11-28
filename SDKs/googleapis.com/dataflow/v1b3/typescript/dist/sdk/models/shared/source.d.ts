import { SpeakeasyBase } from "../../../internal/utils";
import { SourceMetadata } from "./sourcemetadata";
/**
 * A source that records can be read and decoded from.
**/
export declare class Source extends SpeakeasyBase {
    baseSpecs?: Map<string, any>[];
    codec?: Map<string, any>;
    doesNotNeedSplitting?: boolean;
    metadata?: SourceMetadata;
    spec?: Map<string, any>;
}
