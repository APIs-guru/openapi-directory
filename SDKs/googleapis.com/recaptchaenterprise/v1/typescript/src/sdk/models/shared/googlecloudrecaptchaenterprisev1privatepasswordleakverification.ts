import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification
/** 
 * Private password leak verification info.
**/
export class GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptedLeakMatchPrefixes" })
  encryptedLeakMatchPrefixes?: string[];

  @Metadata({ data: "json, name=encryptedUserCredentialsHash" })
  encryptedUserCredentialsHash?: string;

  @Metadata({ data: "json, name=lookupHashPrefix" })
  lookupHashPrefix?: string;

  @Metadata({ data: "json, name=reencryptedUserCredentialsHash" })
  reencryptedUserCredentialsHash?: string;
}
