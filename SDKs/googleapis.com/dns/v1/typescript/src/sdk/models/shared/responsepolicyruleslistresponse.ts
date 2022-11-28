import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeader } from "./responseheader";
import { ResponsePolicyRule } from "./responsepolicyrule";



export class ResponsePolicyRulesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: ResponseHeader;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=responsePolicyRules", elemType: ResponsePolicyRule })
  responsePolicyRules?: ResponsePolicyRule[];
}
