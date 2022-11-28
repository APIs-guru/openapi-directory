import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1TaskExecutionSpec
/** 
 * Execution related settings, like retry and service_account.
**/
export class GoogleCloudDataplexV1TaskExecutionSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=kmsKey" })
  kmsKey?: string;

  @SpeakeasyMetadata({ data: "json, name=maxJobExecutionLifetime" })
  maxJobExecutionLifetime?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;
}
