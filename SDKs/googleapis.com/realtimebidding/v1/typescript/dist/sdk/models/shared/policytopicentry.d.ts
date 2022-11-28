import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTopicEvidence } from "./policytopicevidence";
/**
 * Each policy topic entry will represent a violation of a policy topic for a creative, with the policy topic information and optional evidence for the policy violation.
**/
export declare class PolicyTopicEntry extends SpeakeasyBase {
    evidences?: PolicyTopicEvidence[];
    helpCenterUrl?: string;
    policyTopic?: string;
}
