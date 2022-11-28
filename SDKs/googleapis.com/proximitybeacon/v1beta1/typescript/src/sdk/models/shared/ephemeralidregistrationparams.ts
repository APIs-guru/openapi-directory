import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EphemeralIdRegistrationParams
/** 
 * Information a client needs to provision and register beacons that broadcast Eddystone-EID format beacon IDs, using Elliptic curve Diffie-Hellman key exchange. See [the Eddystone specification](https://github.com/google/eddystone/tree/master/eddystone-eid) at GitHub.
**/
export class EphemeralIdRegistrationParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxRotationPeriodExponent" })
  maxRotationPeriodExponent?: number;

  @SpeakeasyMetadata({ data: "json, name=minRotationPeriodExponent" })
  minRotationPeriodExponent?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceEcdhPublicKey" })
  serviceEcdhPublicKey?: string;
}
