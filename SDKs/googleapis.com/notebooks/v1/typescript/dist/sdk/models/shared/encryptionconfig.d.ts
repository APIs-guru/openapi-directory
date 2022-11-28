import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a custom encryption key configuration that can be applied to a resource. This will encrypt all disks in Virtual Machine.
**/
export declare class EncryptionConfig extends SpeakeasyBase {
    kmsKey?: string;
}
