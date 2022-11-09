import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=contextAttributes", elemType: shared.ContextAttribute })
  contextAttributes?: ContextAttribute[];

  @Metadata({ data: "json, name=dataSourceRestrictions", elemType: shared.DataSourceRestriction })
  dataSourceRestrictions?: DataSourceRestriction[];

  @Metadata({ data: "json, name=facetOptions", elemType: shared.FacetOptions })
  facetOptions?: FacetOptions[];

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=queryInterpretationOptions" })
  queryInterpretationOptions?: QueryInterpretationOptions;

  @Metadata({ data: "json, name=requestOptions" })
  requestOptions?: RequestOptions;

  @Metadata({ data: "json, name=sortOptions" })
  sortOptions?: SortOptions;

  @Metadata({ data: "json, name=start" })
  start?: number;
}
