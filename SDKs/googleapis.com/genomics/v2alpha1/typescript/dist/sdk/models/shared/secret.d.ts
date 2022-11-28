import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline.
**/
export declare class Secret extends SpeakeasyBase {
    cipherText?: string;
    keyName?: string;
}
