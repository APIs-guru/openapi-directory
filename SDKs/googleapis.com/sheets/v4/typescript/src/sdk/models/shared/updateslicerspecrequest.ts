import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlicerSpec } from "./slicerspec";



// UpdateSlicerSpecRequest
/** 
 * Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use UpdateEmbeddedObjectPositionRequest.
**/
export class UpdateSlicerSpecRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=slicerId" })
  slicerId?: number;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: SlicerSpec;
}
