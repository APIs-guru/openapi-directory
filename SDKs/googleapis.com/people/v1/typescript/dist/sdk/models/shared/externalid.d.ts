import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadataInput } from "./fieldmetadata";
import { FieldMetadata } from "./fieldmetadata";
/**
 * An identifier from an external entity related to the person.
**/
export declare class ExternalIdInput extends SpeakeasyBase {
    metadata?: FieldMetadataInput;
    type?: string;
    value?: string;
}
/**
 * An identifier from an external entity related to the person.
**/
export declare class ExternalId extends SpeakeasyBase {
    formattedType?: string;
    metadata?: FieldMetadata;
    type?: string;
    value?: string;
}
