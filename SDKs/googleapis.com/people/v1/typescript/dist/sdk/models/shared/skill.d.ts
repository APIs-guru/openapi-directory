import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadataInput } from "./fieldmetadata";
import { FieldMetadata } from "./fieldmetadata";
/**
 * A skill that the person has.
**/
export declare class SkillInput extends SpeakeasyBase {
    metadata?: FieldMetadataInput;
    value?: string;
}
/**
 * A skill that the person has.
**/
export declare class Skill extends SpeakeasyBase {
    metadata?: FieldMetadata;
    value?: string;
}
