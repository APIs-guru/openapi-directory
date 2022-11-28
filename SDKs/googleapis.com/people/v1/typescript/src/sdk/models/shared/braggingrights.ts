import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";



// BraggingRights
/** 
 * **DEPRECATED**: No data will be returned A person's bragging rights.
**/
export class BraggingRights extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// BraggingRightsInput
/** 
 * **DEPRECATED**: No data will be returned A person's bragging rights.
**/
export class BraggingRightsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadataInput;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
