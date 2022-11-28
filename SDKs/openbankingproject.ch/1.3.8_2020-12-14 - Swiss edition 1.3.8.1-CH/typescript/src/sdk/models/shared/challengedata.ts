import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChallengeDataOtpFormatEnum {
    Characters = "characters",
    Integer = "integer"
}


// ChallengeData
/** 
 * It is contained in addition to the data element 'chosenScaMethod' if challenge data is needed for SCA.
 * In rare cases this attribute is also used in the context of the 'startAuthorisationWithPsuAuthentication' link.
 * 
**/
export class ChallengeData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalInformation" })
  additionalInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=imageLink" })
  imageLink?: string;

  @SpeakeasyMetadata({ data: "json, name=otpFormat" })
  otpFormat?: ChallengeDataOtpFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=otpMaxLength" })
  otpMaxLength?: number;
}
