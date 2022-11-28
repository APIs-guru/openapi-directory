import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceRestriction } from "./datasourcerestriction";
import { RequestOptions } from "./requestoptions";



// SuggestRequest
/** 
 * Request of suggest API.
**/
export class SuggestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceRestrictions", elemType: DataSourceRestriction })
  dataSourceRestrictions?: DataSourceRestriction[];

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=requestOptions" })
  requestOptions?: RequestOptions;
}
