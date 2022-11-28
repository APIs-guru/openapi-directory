import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceRestriction } from "./datasourcerestriction";
import { FacetOptions } from "./facetoptions";
import { SortOptions } from "./sortoptions";
import { QueryInterpretationConfig } from "./queryinterpretationconfig";
import { ScoringConfig } from "./scoringconfig";
import { SourceConfig } from "./sourceconfig";



// SearchApplicationInput
/** 
 * SearchApplication
**/
export class SearchApplicationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceRestrictions", elemType: DataSourceRestriction })
  dataSourceRestrictions?: DataSourceRestriction[];

  @SpeakeasyMetadata({ data: "json, name=defaultFacetOptions", elemType: FacetOptions })
  defaultFacetOptions?: FacetOptions[];

  @SpeakeasyMetadata({ data: "json, name=defaultSortOptions" })
  defaultSortOptions?: SortOptions;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enableAuditLog" })
  enableAuditLog?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=queryInterpretationConfig" })
  queryInterpretationConfig?: QueryInterpretationConfig;

  @SpeakeasyMetadata({ data: "json, name=returnResultThumbnailUrls" })
  returnResultThumbnailUrls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scoringConfig" })
  scoringConfig?: ScoringConfig;

  @SpeakeasyMetadata({ data: "json, name=sourceConfig", elemType: SourceConfig })
  sourceConfig?: SourceConfig[];
}


// SearchApplication
/** 
 * SearchApplication
**/
export class SearchApplication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceRestrictions", elemType: DataSourceRestriction })
  dataSourceRestrictions?: DataSourceRestriction[];

  @SpeakeasyMetadata({ data: "json, name=defaultFacetOptions", elemType: FacetOptions })
  defaultFacetOptions?: FacetOptions[];

  @SpeakeasyMetadata({ data: "json, name=defaultSortOptions" })
  defaultSortOptions?: SortOptions;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enableAuditLog" })
  enableAuditLog?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operationIds" })
  operationIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=queryInterpretationConfig" })
  queryInterpretationConfig?: QueryInterpretationConfig;

  @SpeakeasyMetadata({ data: "json, name=returnResultThumbnailUrls" })
  returnResultThumbnailUrls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scoringConfig" })
  scoringConfig?: ScoringConfig;

  @SpeakeasyMetadata({ data: "json, name=sourceConfig", elemType: SourceConfig })
  sourceConfig?: SourceConfig[];
}
