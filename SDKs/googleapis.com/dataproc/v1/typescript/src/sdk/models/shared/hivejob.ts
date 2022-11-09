import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryList } from "./querylist";


// HiveJob
/** 
 * A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN.
**/
export class HiveJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=continueOnFailure" })
  continueOnFailure?: boolean;

  @Metadata({ data: "json, name=jarFileUris" })
  jarFileUris?: string[];

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=queryFileUri" })
  queryFileUri?: string;

  @Metadata({ data: "json, name=queryList" })
  queryList?: QueryList;

  @Metadata({ data: "json, name=scriptVariables" })
  scriptVariables?: Map<string, string>;
}
