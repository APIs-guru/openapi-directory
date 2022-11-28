import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage401Sbs } from "./tppmessage401sbs";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 401.
 *
**/
export declare class Error401NgSbs extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    tppMessages?: TppMessage401Sbs[];
}
