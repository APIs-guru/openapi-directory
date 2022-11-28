import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeader } from "./responseheader";
import { ResponsePolicyRule } from "./responsepolicyrule";



export class ResponsePolicyRulesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: ResponseHeader;

  @SpeakeasyMetadata({ data: "json, name=responsePolicyRule" })
  responsePolicyRule?: ResponsePolicyRule;
}
