import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SlicerSpec } from "./slicerspec";


// UpdateSlicerSpecRequest
/** 
 * Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use UpdateEmbeddedObjectPositionRequest.
**/
export class UpdateSlicerSpecRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=slicerId" })
  slicerId?: number;

  @Metadata({ data: "json, name=spec" })
  spec?: SlicerSpec;
}
