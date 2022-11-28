import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AnthosObservabilityMembershipSpec
/** 
 * **Anthosobservability**: Per-Membership Feature spec.
**/
export class AnthosObservabilityMembershipSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doNotOptimizeMetrics" })
  doNotOptimizeMetrics?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableStackdriverOnApplications" })
  enableStackdriverOnApplications?: boolean;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
