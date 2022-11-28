import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContextAttribute } from "./contextattribute";
import { DataSourceRestriction } from "./datasourcerestriction";
import { FacetOptions } from "./facetoptions";
import { QueryInterpretationOptions } from "./queryinterpretationoptions";
import { RequestOptions } from "./requestoptions";
import { SortOptions } from "./sortoptions";



// SearchRequest
/** 
 * The search API request.
**/
export class SearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contextAttributes", elemType: ContextAttribute })
  contextAttributes?: ContextAttribute[];

  @SpeakeasyMetadata({ data: "json, name=dataSourceRestrictions", elemType: DataSourceRestriction })
  dataSourceRestrictions?: DataSourceRestriction[];

  @SpeakeasyMetadata({ data: "json, name=facetOptions", elemType: FacetOptions })
  facetOptions?: FacetOptions[];

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=queryInterpretationOptions" })
  queryInterpretationOptions?: QueryInterpretationOptions;

  @SpeakeasyMetadata({ data: "json, name=requestOptions" })
  requestOptions?: RequestOptions;

  @SpeakeasyMetadata({ data: "json, name=sortOptions" })
  sortOptions?: SortOptions;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;
}
