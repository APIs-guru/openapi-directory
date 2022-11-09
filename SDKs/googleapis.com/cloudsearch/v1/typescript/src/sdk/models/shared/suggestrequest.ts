import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSourceRestriction } from "./datasourcerestriction";
import { RequestOptions } from "./requestoptions";


// SuggestRequest
/** 
 * Request of suggest API.
**/
export class SuggestRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceRestrictions", elemType: shared.DataSourceRestriction })
  dataSourceRestrictions?: DataSourceRestriction[];

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=requestOptions" })
  requestOptions?: RequestOptions;
}
