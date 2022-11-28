import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This message defines request authentication attributes. Terminology is based on the JSON Web Token (JWT) standard, but the terms also correlate to concepts in other standards.
**/
export declare class Auth extends SpeakeasyBase {
    accessLevels?: string[];
    audiences?: string[];
    claims?: Map<string, any>;
    presenter?: string;
    principal?: string;
}
