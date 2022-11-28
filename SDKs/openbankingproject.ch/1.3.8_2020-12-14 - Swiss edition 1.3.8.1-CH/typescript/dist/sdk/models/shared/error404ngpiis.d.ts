import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage404Piis } from "./tppmessage404piis";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 404.
 *
**/
export declare class Error404NgPiis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    tppMessages?: TppMessage404Piis[];
}
