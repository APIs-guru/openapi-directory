import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyAlternativeNameServerConfigTargetNameServer } from "./policyalternativenameserverconfigtargetnameserver";


export class PolicyAlternativeNameServerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=targetNameServers", elemType: shared.PolicyAlternativeNameServerConfigTargetNameServer })
  targetNameServers?: PolicyAlternativeNameServerConfigTargetNameServer[];
}
