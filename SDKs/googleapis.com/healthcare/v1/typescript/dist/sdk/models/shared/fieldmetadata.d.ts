import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FieldMetadataActionEnum {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Transform = "TRANSFORM",
    InspectAndTransform = "INSPECT_AND_TRANSFORM",
    DoNotTransform = "DO_NOT_TRANSFORM"
}
/**
 * Specifies FHIR paths to match, and how to handle de-identification of matching fields.
**/
export declare class FieldMetadata extends SpeakeasyBase {
    action?: FieldMetadataActionEnum;
    paths?: string[];
}
