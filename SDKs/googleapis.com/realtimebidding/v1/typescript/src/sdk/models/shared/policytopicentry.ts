import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyTopicEvidence } from "./policytopicevidence";



// PolicyTopicEntry
/** 
 * Each policy topic entry will represent a violation of a policy topic for a creative, with the policy topic information and optional evidence for the policy violation.
**/
export class PolicyTopicEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evidences", elemType: PolicyTopicEvidence })
  evidences?: PolicyTopicEvidence[];

  @SpeakeasyMetadata({ data: "json, name=helpCenterUrl" })
  helpCenterUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=policyTopic" })
  policyTopic?: string;
}
