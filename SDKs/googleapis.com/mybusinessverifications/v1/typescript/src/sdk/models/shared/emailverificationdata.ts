import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EmailVerificationData
/** 
 * Display data for verifications through email.
**/
export class EmailVerificationData extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=isUserNameEditable" })
  isUserNameEditable?: boolean;

  @Metadata({ data: "json, name=user" })
  user?: string;
}
