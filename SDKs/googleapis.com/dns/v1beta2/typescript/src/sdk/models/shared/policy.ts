import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyAlternativeNameServerConfig } from "./policyalternativenameserverconfig";
import { PolicyNetwork } from "./policynetwork";



// Policy
/** 
 * A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.
**/
export class Policy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternativeNameServerConfig" })
  alternativeNameServerConfig?: PolicyAlternativeNameServerConfig;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enableInboundForwarding" })
  enableInboundForwarding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableLogging" })
  enableLogging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networks", elemType: PolicyNetwork })
  networks?: PolicyNetwork[];
}
