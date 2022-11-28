import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to inject credentials into a cluster.
**/
export declare class InjectCredentialsRequest extends SpeakeasyBase {
    clusterUuid?: string;
    credentialsCiphertext?: string;
}
