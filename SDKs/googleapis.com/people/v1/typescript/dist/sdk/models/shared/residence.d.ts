import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
/**
 * **DEPRECATED**: Please use `person.locations` instead. A person's past or current residence.
**/
export declare class Residence extends SpeakeasyBase {
    current?: boolean;
    metadata?: FieldMetadata;
    value?: string;
}
/**
 * **DEPRECATED**: Please use `person.locations` instead. A person's past or current residence.
**/
export declare class ResidenceInput extends SpeakeasyBase {
    current?: boolean;
    metadata?: FieldMetadataInput;
    value?: string;
}
