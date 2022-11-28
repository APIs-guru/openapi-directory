import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for an HMAC + SHA signing algorithm
**/
export declare class HsAlgoSettings extends SpeakeasyBase {
    secret: string;
    size: number;
    type: string;
}
