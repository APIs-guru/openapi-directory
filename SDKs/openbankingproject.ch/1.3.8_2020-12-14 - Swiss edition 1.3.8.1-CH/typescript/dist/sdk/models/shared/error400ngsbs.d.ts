import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage400Sbs } from "./tppmessage400sbs";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 400.
 *
**/
export declare class Error400NgSbs extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    tppMessages?: TppMessage400Sbs[];
}
