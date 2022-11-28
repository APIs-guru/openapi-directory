import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyAlternativeNameServerConfigTargetNameServer } from "./policyalternativenameserverconfigtargetnameserver";



export class PolicyAlternativeNameServerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=targetNameServers", elemType: PolicyAlternativeNameServerConfigTargetNameServer })
  targetNameServers?: PolicyAlternativeNameServerConfigTargetNameServer[];
}
