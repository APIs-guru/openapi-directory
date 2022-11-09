import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VerificationSettings } from "./verificationsettings";


// PassThrough
/** 
 * Strategy where only signature and field values are verified
**/
export class PassThrough extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=verificationSettings" })
  verificationSettings: VerificationSettings;
}
