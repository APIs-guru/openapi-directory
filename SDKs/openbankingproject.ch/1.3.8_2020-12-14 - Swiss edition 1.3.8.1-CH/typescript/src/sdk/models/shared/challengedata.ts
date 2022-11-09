import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ChallengeDataOtpFormatEnum {
    Characters = "characters"
,    Integer = "integer"
}


// ChallengeData
/** 
 * It is contained in addition to the data element 'chosenScaMethod' if challenge data is needed for SCA.
 * In rare cases this attribute is also used in the context of the 'startAuthorisationWithPsuAuthentication' link.
 * 
**/
export class ChallengeData extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalInformation" })
  additionalInformation?: string;

  @Metadata({ data: "json, name=data" })
  data?: string[];

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=imageLink" })
  imageLink?: string;

  @Metadata({ data: "json, name=otpFormat" })
  otpFormat?: ChallengeDataOtpFormatEnum;

  @Metadata({ data: "json, name=otpMaxLength" })
  otpMaxLength?: number;
}
