import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information a client needs to provision and register beacons that broadcast Eddystone-EID format beacon IDs, using Elliptic curve Diffie-Hellman key exchange. See [the Eddystone specification](https://github.com/google/eddystone/tree/master/eddystone-eid) at GitHub.
**/
export declare class EphemeralIdRegistrationParams extends SpeakeasyBase {
    maxRotationPeriodExponent?: number;
    minRotationPeriodExponent?: number;
    serviceEcdhPublicKey?: string;
}
