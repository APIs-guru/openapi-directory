import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
import { QueryList } from "./querylist";



// PigJob
/** 
 * A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN.
**/
export class PigJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continueOnFailure" })
  continueOnFailure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jarFileUris" })
  jarFileUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=queryFileUri" })
  queryFileUri?: string;

  @SpeakeasyMetadata({ data: "json, name=queryList" })
  queryList?: QueryList;

  @SpeakeasyMetadata({ data: "json, name=scriptVariables" })
  scriptVariables?: Map<string, string>;
}
