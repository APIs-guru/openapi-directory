import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectPosition } from "./embeddedobjectposition";
import { SlicerSpec } from "./slicerspec";



// Slicer
/** 
 * A slicer in a sheet.
**/
export class Slicer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: EmbeddedObjectPosition;

  @SpeakeasyMetadata({ data: "json, name=slicerId" })
  slicerId?: number;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: SlicerSpec;
}
