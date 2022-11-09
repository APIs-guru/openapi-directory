import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResponseHeader } from "./responseheader";
import { ResponsePolicyRule } from "./responsepolicyrule";


export class ResponsePolicyRulesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=header" })
  header?: ResponseHeader;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=responsePolicyRules", elemType: shared.ResponsePolicyRule })
  responsePolicyRules?: ResponsePolicyRule[];
}
