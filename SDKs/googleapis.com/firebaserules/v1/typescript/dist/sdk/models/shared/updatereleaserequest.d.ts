import { SpeakeasyBase } from "../../../internal/utils";
import { ReleaseInput } from "./release";
/**
 * The request for FirebaseRulesService.UpdateRelease.
**/
export declare class UpdateReleaseRequestInput extends SpeakeasyBase {
    release?: ReleaseInput;
    updateMask?: string;
}
