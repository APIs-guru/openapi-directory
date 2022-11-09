import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFirebaseAppcheckV1betaAppCheckToken } from "./googlefirebaseappcheckv1betaappchecktoken";
import { GoogleFirebaseAppcheckV1betaAttestationTokenResponse } from "./googlefirebaseappcheckv1betaattestationtokenresponse";
/**
 * Response message for the ExchangeAppAttestAttestation method.
**/
export declare class GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse extends SpeakeasyBase {
    appCheckToken?: GoogleFirebaseAppcheckV1betaAppCheckToken;
    artifact?: string;
    attestationToken?: GoogleFirebaseAppcheckV1betaAttestationTokenResponse;
}
