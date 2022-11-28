import { SpeakeasyBase } from "../../../internal/utils";
import { HttpBody } from "./httpbody";
import { Notice } from "./notice";
/**
 * Response to a general RDAP query.
**/
export declare class RdapResponse extends SpeakeasyBase {
    description?: string[];
    errorCode?: number;
    jsonResponse?: HttpBody;
    lang?: string;
    notices?: Notice[];
    rdapConformance?: string[];
    title?: string;
}
