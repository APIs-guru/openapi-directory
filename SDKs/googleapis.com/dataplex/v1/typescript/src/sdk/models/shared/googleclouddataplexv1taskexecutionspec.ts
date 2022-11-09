import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDataplexV1TaskExecutionSpec
/** 
 * Execution related settings, like retry and service_account.
**/
export class GoogleCloudDataplexV1TaskExecutionSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=args" })
  args?: Map<string, string>;

  @Metadata({ data: "json, name=kmsKey" })
  kmsKey?: string;

  @Metadata({ data: "json, name=maxJobExecutionLifetime" })
  maxJobExecutionLifetime?: string;

  @Metadata({ data: "json, name=project" })
  project?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;
}
