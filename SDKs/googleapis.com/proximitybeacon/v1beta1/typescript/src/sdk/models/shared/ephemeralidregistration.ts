import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EphemeralIdRegistration
/** 
 * Write-only registration parameters for beacons using Eddystone-EID format. Two ways of securely registering an Eddystone-EID beacon with the service are supported: 1. Perform an ECDH key exchange via this API, including a previous call to `GET /v1beta1/eidparams`. In this case the fields `beacon_ecdh_public_key` and `service_ecdh_public_key` should be populated and `beacon_identity_key` should not be populated. This method ensures that only the two parties in the ECDH key exchange can compute the identity key, which becomes a secret between them. 2. Derive or obtain the beacon's identity key via other secure means (perhaps an ECDH key exchange between the beacon and a mobile device or any other secure method), and then submit the resulting identity key to the service. In this case `beacon_identity_key` field should be populated, and neither of `beacon_ecdh_public_key` nor `service_ecdh_public_key` fields should be. The security of this method depends on how securely the parties involved (in particular the bluetooth client) handle the identity key, and obviously on how securely the identity key was generated. See [the Eddystone specification](https://github.com/google/eddystone/tree/master/eddystone-eid) at GitHub.
**/
export class EphemeralIdRegistration extends SpeakeasyBase {
  @Metadata({ data: "json, name=beaconEcdhPublicKey" })
  beaconEcdhPublicKey?: string;

  @Metadata({ data: "json, name=beaconIdentityKey" })
  beaconIdentityKey?: string;

  @Metadata({ data: "json, name=initialClockValue" })
  initialClockValue?: string;

  @Metadata({ data: "json, name=initialEid" })
  initialEid?: string;

  @Metadata({ data: "json, name=rotationPeriodExponent" })
  rotationPeriodExponent?: number;

  @Metadata({ data: "json, name=serviceEcdhPublicKey" })
  serviceEcdhPublicKey?: string;
}
