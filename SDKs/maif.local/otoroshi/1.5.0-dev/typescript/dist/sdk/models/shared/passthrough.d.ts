import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationSettings } from "./verificationsettings";
/**
 * Strategy where only signature and field values are verified
**/
export declare class PassThrough extends SpeakeasyBase {
    type: string;
    verificationSettings: VerificationSettings;
}
