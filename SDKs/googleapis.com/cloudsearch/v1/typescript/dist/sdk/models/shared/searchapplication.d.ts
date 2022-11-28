import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceRestriction } from "./datasourcerestriction";
import { FacetOptions } from "./facetoptions";
import { SortOptions } from "./sortoptions";
import { QueryInterpretationConfig } from "./queryinterpretationconfig";
import { ScoringConfig } from "./scoringconfig";
import { SourceConfig } from "./sourceconfig";
/**
 * SearchApplication
**/
export declare class SearchApplicationInput extends SpeakeasyBase {
    dataSourceRestrictions?: DataSourceRestriction[];
    defaultFacetOptions?: FacetOptions[];
    defaultSortOptions?: SortOptions;
    displayName?: string;
    enableAuditLog?: boolean;
    name?: string;
    queryInterpretationConfig?: QueryInterpretationConfig;
    returnResultThumbnailUrls?: boolean;
    scoringConfig?: ScoringConfig;
    sourceConfig?: SourceConfig[];
}
/**
 * SearchApplication
**/
export declare class SearchApplication extends SpeakeasyBase {
    dataSourceRestrictions?: DataSourceRestriction[];
    defaultFacetOptions?: FacetOptions[];
    defaultSortOptions?: SortOptions;
    displayName?: string;
    enableAuditLog?: boolean;
    name?: string;
    operationIds?: string[];
    queryInterpretationConfig?: QueryInterpretationConfig;
    returnResultThumbnailUrls?: boolean;
    scoringConfig?: ScoringConfig;
    sourceConfig?: SourceConfig[];
}
