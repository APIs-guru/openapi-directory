import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information used to generate a token
**/
export declare class IdentificationTokenGenerationRequest extends SpeakeasyBase {
    email: string;
    firstName?: string;
    lastName?: string;
}
