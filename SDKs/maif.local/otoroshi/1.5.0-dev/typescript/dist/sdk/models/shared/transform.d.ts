import { SpeakeasyBase } from "../../../internal/utils";
import { TransformSettings } from "./transformsettings";
import { VerificationSettings } from "./verificationsettings";
/**
 * Strategy where signature and field values are verified, trasnformed and then token si re-signed
**/
export declare class Transform extends SpeakeasyBase {
    algoSettings: any;
    transformSettings?: TransformSettings;
    type: string;
    verificationSettings: VerificationSettings;
}
