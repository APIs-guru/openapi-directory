import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSourceRestriction } from "./datasourcerestriction";
import { FacetOptions } from "./facetoptions";
import { SortOptions } from "./sortoptions";
import { QueryInterpretationConfig } from "./queryinterpretationconfig";
import { ScoringConfig } from "./scoringconfig";
import { SourceConfig } from "./sourceconfig";


// SearchApplication
/** 
 * SearchApplication
**/
export class SearchApplication extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceRestrictions", elemType: shared.DataSourceRestriction })
  dataSourceRestrictions?: DataSourceRestriction[];

  @Metadata({ data: "json, name=defaultFacetOptions", elemType: shared.FacetOptions })
  defaultFacetOptions?: FacetOptions[];

  @Metadata({ data: "json, name=defaultSortOptions" })
  defaultSortOptions?: SortOptions;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=enableAuditLog" })
  enableAuditLog?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operationIds" })
  operationIds?: string[];

  @Metadata({ data: "json, name=queryInterpretationConfig" })
  queryInterpretationConfig?: QueryInterpretationConfig;

  @Metadata({ data: "json, name=returnResultThumbnailUrls" })
  returnResultThumbnailUrls?: boolean;

  @Metadata({ data: "json, name=scoringConfig" })
  scoringConfig?: ScoringConfig;

  @Metadata({ data: "json, name=sourceConfig", elemType: shared.SourceConfig })
  sourceConfig?: SourceConfig[];
}
