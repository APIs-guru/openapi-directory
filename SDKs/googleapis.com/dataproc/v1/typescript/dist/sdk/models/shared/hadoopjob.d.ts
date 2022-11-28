import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
/**
 * A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html).
**/
export declare class HadoopJob extends SpeakeasyBase {
    archiveUris?: string[];
    args?: string[];
    fileUris?: string[];
    jarFileUris?: string[];
    loggingConfig?: LoggingConfig;
    mainClass?: string;
    mainJarFileUri?: string;
    properties?: Map<string, string>;
}
