import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput
/** 
 * Private password leak verification info.
**/
export class GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptedUserCredentialsHash" })
  encryptedUserCredentialsHash?: string;

  @SpeakeasyMetadata({ data: "json, name=lookupHashPrefix" })
  lookupHashPrefix?: string;
}


// GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification
/** 
 * Private password leak verification info.
**/
export class GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptedLeakMatchPrefixes" })
  encryptedLeakMatchPrefixes?: string[];

  @SpeakeasyMetadata({ data: "json, name=encryptedUserCredentialsHash" })
  encryptedUserCredentialsHash?: string;

  @SpeakeasyMetadata({ data: "json, name=lookupHashPrefix" })
  lookupHashPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=reencryptedUserCredentialsHash" })
  reencryptedUserCredentialsHash?: string;
}
