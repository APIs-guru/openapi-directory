import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
import { QueryList } from "./querylist";



// PrestoJob
/** 
 * A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster.
**/
export class PrestoJob extends SpeakeasyBase {
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
