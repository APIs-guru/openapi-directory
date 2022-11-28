import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
/**
 * One of the person's interests.
**/
export declare class Interest extends SpeakeasyBase {
    metadata?: FieldMetadata;
    value?: string;
}
/**
 * One of the person's interests.
**/
export declare class InterestInput extends SpeakeasyBase {
    metadata?: FieldMetadataInput;
    value?: string;
}
