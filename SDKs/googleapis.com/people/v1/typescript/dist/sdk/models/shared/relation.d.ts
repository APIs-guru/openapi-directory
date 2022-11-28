import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's relation to another person.
**/
export declare class Relation extends SpeakeasyBase {
    formattedType?: string;
    metadata?: FieldMetadata;
    person?: string;
    type?: string;
}
/**
 * A person's relation to another person.
**/
export declare class RelationInput extends SpeakeasyBase {
    metadata?: FieldMetadataInput;
    person?: string;
    type?: string;
}
