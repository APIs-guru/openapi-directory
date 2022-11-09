import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingConfig } from "./loggingconfig";
import { QueryList } from "./querylist";


// TrinoJob
/** 
 * A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster.
**/
export class TrinoJob extends SpeakeasyBase {
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
