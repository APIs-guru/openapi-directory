import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryList } from "./querylist";



// HiveJob
/** 
 * A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN.
**/
export class HiveJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continueOnFailure" })
  continueOnFailure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jarFileUris" })
  jarFileUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=queryFileUri" })
  queryFileUri?: string;

  @SpeakeasyMetadata({ data: "json, name=queryList" })
  queryList?: QueryList;

  @SpeakeasyMetadata({ data: "json, name=scriptVariables" })
  scriptVariables?: Map<string, string>;
}
