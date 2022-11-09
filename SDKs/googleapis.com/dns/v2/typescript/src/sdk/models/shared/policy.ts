import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyAlternativeNameServerConfig } from "./policyalternativenameserverconfig";
import { PolicyNetwork } from "./policynetwork";


// Policy
/** 
 * A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.
**/
export class Policy extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternativeNameServerConfig" })
  alternativeNameServerConfig?: PolicyAlternativeNameServerConfig;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enableInboundForwarding" })
  enableInboundForwarding?: boolean;

  @Metadata({ data: "json, name=enableLogging" })
  enableLogging?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networks", elemType: shared.PolicyNetwork })
  networks?: PolicyNetwork[];
}
