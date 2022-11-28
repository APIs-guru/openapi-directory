import { SpeakeasyBase } from "../../../internal/utils";
import { PostalCodeRange } from "./postalcoderange";
export declare class PostalCodeGroup extends SpeakeasyBase {
    country?: string;
    name?: string;
    postalCodeRanges?: PostalCodeRange[];
}
