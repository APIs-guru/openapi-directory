import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value.
**/
export declare class InlineSecret extends SpeakeasyBase {
    envMap?: Map<string, string>;
    kmsKeyName?: string;
}
