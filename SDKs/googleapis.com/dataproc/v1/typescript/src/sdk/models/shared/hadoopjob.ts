import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingConfig } from "./loggingconfig";


// HadoopJob
/** 
 * A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html).
**/
export class HadoopJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=archiveUris" })
  archiveUris?: string[];

  @Metadata({ data: "json, name=args" })
  args?: string[];

  @Metadata({ data: "json, name=fileUris" })
  fileUris?: string[];

  @Metadata({ data: "json, name=jarFileUris" })
  jarFileUris?: string[];

  @Metadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @Metadata({ data: "json, name=mainClass" })
  mainClass?: string;

  @Metadata({ data: "json, name=mainJarFileUri" })
  mainJarFileUri?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;
}
