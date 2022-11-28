import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryOptions
/** 
 * Query optimizer configuration.
**/
export class QueryOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=optimizerStatisticsPackage" })
  optimizerStatisticsPackage?: string;

  @SpeakeasyMetadata({ data: "json, name=optimizerVersion" })
  optimizerVersion?: string;
}
