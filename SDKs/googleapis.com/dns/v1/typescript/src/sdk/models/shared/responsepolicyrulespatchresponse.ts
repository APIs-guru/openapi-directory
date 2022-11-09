import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResponseHeader } from "./responseheader";
import { ResponsePolicyRule } from "./responsepolicyrule";


export class ResponsePolicyRulesPatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=header" })
  header?: ResponseHeader;

  @Metadata({ data: "json, name=responsePolicyRule" })
  responsePolicyRule?: ResponsePolicyRule;
}
