import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for an HMAC + SHA signing algorithm
**/
export declare class RsAlgoSettings extends SpeakeasyBase {
    privateKey?: string;
    publicKey: string;
    size: number;
    type: string;
}
