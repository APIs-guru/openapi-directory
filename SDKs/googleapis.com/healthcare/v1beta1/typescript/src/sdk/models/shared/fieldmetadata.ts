import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FieldMetadataActionEnum {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Transform = "TRANSFORM",
    InspectAndTransform = "INSPECT_AND_TRANSFORM",
    DoNotTransform = "DO_NOT_TRANSFORM"
}


// FieldMetadata
/** 
 * Specifies FHIR paths to match, and how to handle de-identification of matching fields.
**/
export class FieldMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: FieldMetadataActionEnum;

  @SpeakeasyMetadata({ data: "json, name=paths" })
  paths?: string[];
}
