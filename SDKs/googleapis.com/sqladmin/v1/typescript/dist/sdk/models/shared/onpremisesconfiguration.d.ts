import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceReference } from "./instancereference";
/**
 * On-premises instance configuration.
**/
export declare class OnPremisesConfiguration extends SpeakeasyBase {
    caCertificate?: string;
    clientCertificate?: string;
    clientKey?: string;
    dumpFilePath?: string;
    hostPort?: string;
    kind?: string;
    password?: string;
    sourceInstance?: InstanceReference;
    username?: string;
}
