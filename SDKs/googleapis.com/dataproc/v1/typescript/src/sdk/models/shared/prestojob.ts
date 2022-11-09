import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingConfig } from "./loggingconfig";
import { QueryList } from "./querylist";


// PrestoJob
/** 
 * A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster.
**/
export class PrestoJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientTags" })
  clientTags?: string[];

  @Metadata({ data: "json, name=continueOnFailure" })
  continueOnFailure?: boolean;

  @Metadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @Metadata({ data: "json, name=outputFormat" })
  outputFormat?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=queryFileUri" })
  queryFileUri?: string;

  @Metadata({ data: "json, name=queryList" })
  queryList?: QueryList;
}
