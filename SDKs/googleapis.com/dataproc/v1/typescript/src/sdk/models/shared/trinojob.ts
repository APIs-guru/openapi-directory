import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
import { QueryList } from "./querylist";



// TrinoJob
/** 
 * A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster.
**/
export class TrinoJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientTags" })
  clientTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=continueOnFailure" })
  continueOnFailure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=outputFormat" })
  outputFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=queryFileUri" })
  queryFileUri?: string;

  @SpeakeasyMetadata({ data: "json, name=queryList" })
  queryList?: QueryList;
}
