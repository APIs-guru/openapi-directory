import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingConfig } from "./loggingconfig";
import { QueryList } from "./querylist";


// PigJob
/** 
 * A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN.
**/
export class PigJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=continueOnFailure" })
  continueOnFailure?: boolean;

  @Metadata({ data: "json, name=jarFileUris" })
  jarFileUris?: string[];

  @Metadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=queryFileUri" })
  queryFileUri?: string;

  @Metadata({ data: "json, name=queryList" })
  queryList?: QueryList;

  @Metadata({ data: "json, name=scriptVariables" })
  scriptVariables?: Map<string, string>;
}
