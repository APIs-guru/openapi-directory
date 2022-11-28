import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's calendar URL.
**/
export declare class CalendarUrl extends SpeakeasyBase {
    formattedType?: string;
    metadata?: FieldMetadata;
    type?: string;
    url?: string;
}
/**
 * A person's calendar URL.
**/
export declare class CalendarUrlInput extends SpeakeasyBase {
    metadata?: FieldMetadataInput;
    type?: string;
    url?: string;
}
