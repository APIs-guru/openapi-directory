import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmbeddedObjectPosition } from "./embeddedobjectposition";
import { SlicerSpec } from "./slicerspec";


// Slicer
/** 
 * A slicer in a sheet.
**/
export class Slicer extends SpeakeasyBase {
  @Metadata({ data: "json, name=position" })
  position?: EmbeddedObjectPosition;

  @Metadata({ data: "json, name=slicerId" })
  slicerId?: number;

  @Metadata({ data: "json, name=spec" })
  spec?: SlicerSpec;
}
