import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for an EC + SHA signing algorithm
**/
export declare class EsAlgoSettings extends SpeakeasyBase {
    privateKey?: string;
    publicKey: string;
    size: number;
    type: string;
}
