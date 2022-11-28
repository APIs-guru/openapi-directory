import { SpeakeasyBase } from "../../../internal/utils";
import { KeyObject } from "./keyobject";
export declare class KeyMaterial extends SpeakeasyBase {
    cryptoAlg: string;
    curve: string;
    dhPublicKey: KeyObject;
    nonce: string;
}
