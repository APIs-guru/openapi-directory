import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryOptions
/** 
 * Query optimizer configuration.
**/
export class QueryOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=optimizerStatisticsPackage" })
  optimizerStatisticsPackage?: string;

  @Metadata({ data: "json, name=optimizerVersion" })
  optimizerVersion?: string;
}
