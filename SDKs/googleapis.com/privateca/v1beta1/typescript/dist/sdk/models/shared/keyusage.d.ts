import { SpeakeasyBase } from "../../../internal/utils";
import { KeyUsageOptions } from "./keyusageoptions";
import { ExtendedKeyUsageOptions } from "./extendedkeyusageoptions";
import { ObjectId } from "./objectid";
/**
 * A KeyUsage describes key usage values that may appear in an X.509 certificate.
**/
export declare class KeyUsage extends SpeakeasyBase {
    baseKeyUsage?: KeyUsageOptions;
    extendedKeyUsage?: ExtendedKeyUsageOptions;
    unknownExtendedKeyUsages?: ObjectId[];
}
