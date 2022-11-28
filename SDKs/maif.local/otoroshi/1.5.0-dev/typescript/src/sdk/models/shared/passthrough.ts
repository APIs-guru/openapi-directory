import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerificationSettings } from "./verificationsettings";



// PassThrough
/** 
 * Strategy where only signature and field values are verified
**/
export class PassThrough extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=verificationSettings" })
  verificationSettings: VerificationSettings;
}
