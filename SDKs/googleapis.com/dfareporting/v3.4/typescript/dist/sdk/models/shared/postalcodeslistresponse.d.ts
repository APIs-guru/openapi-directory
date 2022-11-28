import { SpeakeasyBase } from "../../../internal/utils";
import { PostalCode } from "./postalcode";
/**
 * Postal Code List Response
**/
export declare class PostalCodesListResponse extends SpeakeasyBase {
    kind?: string;
    postalCodes?: PostalCode[];
}
