import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ChallengeDataOtpFormatEnum {
    Characters = "characters",
    Integer = "integer"
}
/**
 * It is contained in addition to the data element 'chosenScaMethod' if challenge data is needed for SCA.
 * In rare cases this attribute is also used in the context of the 'startAuthorisationWithPsuAuthentication' link.
 *
**/
export declare class ChallengeData extends SpeakeasyBase {
    additionalInformation?: string;
    data?: string[];
    image?: string;
    imageLink?: string;
    otpFormat?: ChallengeDataOtpFormatEnum;
    otpMaxLength?: number;
}
