import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmailVerificationData
/** 
 * Display data for verifications through email.
**/
export class EmailVerificationData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=isUserNameEditable" })
  isUserNameEditable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}
