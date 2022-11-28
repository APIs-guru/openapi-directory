import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
/**
 * Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.
**/
export declare class ClientData extends SpeakeasyBase {
    key?: string;
    metadata?: FieldMetadata;
    value?: string;
}
/**
 * Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.
**/
export declare class ClientDataInput extends SpeakeasyBase {
    key?: string;
    metadata?: FieldMetadataInput;
    value?: string;
}
