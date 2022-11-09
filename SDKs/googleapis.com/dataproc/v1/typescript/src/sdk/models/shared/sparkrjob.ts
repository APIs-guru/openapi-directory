import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingConfig } from "./loggingconfig";


// SparkRJob
/** 
 * A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN.
**/
export class SparkRJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=archiveUris" })
  archiveUris?: string[];

  @Metadata({ data: "json, name=args" })
  args?: string[];

  @Metadata({ data: "json, name=fileUris" })
  fileUris?: string[];

  @Metadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @Metadata({ data: "json, name=mainRFileUri" })
  mainRFileUri?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;
}
