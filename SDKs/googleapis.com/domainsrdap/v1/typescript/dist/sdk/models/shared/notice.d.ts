import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
/**
 * Notices object defined in [section 4.3 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.3).
**/
export declare class Notice extends SpeakeasyBase {
    description?: string[];
    links?: Link[];
    title?: string;
    type?: string;
}
