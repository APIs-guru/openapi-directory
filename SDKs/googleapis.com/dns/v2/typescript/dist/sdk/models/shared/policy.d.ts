import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyAlternativeNameServerConfig } from "./policyalternativenameserverconfig";
import { PolicyNetwork } from "./policynetwork";
/**
 * A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.
**/
export declare class Policy extends SpeakeasyBase {
    alternativeNameServerConfig?: PolicyAlternativeNameServerConfig;
    description?: string;
    enableInboundForwarding?: boolean;
    enableLogging?: boolean;
    id?: string;
    kind?: string;
    name?: string;
    networks?: PolicyNetwork[];
}
