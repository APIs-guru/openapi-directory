import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyTopicEvidence } from "./policytopicevidence";


// PolicyTopicEntry
/** 
 * Each policy topic entry will represent a violation of a policy topic for a creative, with the policy topic information and optional evidence for the policy violation.
**/
export class PolicyTopicEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=evidences", elemType: shared.PolicyTopicEvidence })
  evidences?: PolicyTopicEvidence[];

  @Metadata({ data: "json, name=helpCenterUrl" })
  helpCenterUrl?: string;

  @Metadata({ data: "json, name=policyTopic" })
  policyTopic?: string;
}
