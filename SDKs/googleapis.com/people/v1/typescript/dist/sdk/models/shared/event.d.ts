import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
/**
 * An event related to the person.
**/
export declare class Event extends SpeakeasyBase {
    date?: Date;
    formattedType?: string;
    metadata?: FieldMetadata;
    type?: string;
}
/**
 * An event related to the person.
**/
export declare class EventInput extends SpeakeasyBase {
    date?: Date;
    metadata?: FieldMetadataInput;
    type?: string;
}
