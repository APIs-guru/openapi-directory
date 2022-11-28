import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Envoy uses SemVer (https://semver.org/). Major/minor versions indicate expected behaviors and APIs, the patch version field is used only for security fixes and can be generally ignored.
**/
export declare class SemanticVersion extends SpeakeasyBase {
    majorNumber?: number;
    minorNumber?: number;
    patch?: number;
}
