import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HashTypeEnum {
    HashTypeUnspecified = "HASH_TYPE_UNSPECIFIED",
    Sha256 = "SHA256"
}
/**
 * Container message for hash values.
**/
export declare class Hash extends SpeakeasyBase {
    type?: HashTypeEnum;
    value?: string;
}
