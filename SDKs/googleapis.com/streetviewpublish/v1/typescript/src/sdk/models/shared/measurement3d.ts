import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Measurement3d
/** 
 * A Generic 3d measurement sample.
**/
export class Measurement3d extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=captureTime" })
  captureTime?: string;

  @SpeakeasyMetadata({ data: "json, name=x" })
  x?: number;

  @SpeakeasyMetadata({ data: "json, name=y" })
  y?: number;

  @SpeakeasyMetadata({ data: "json, name=z" })
  z?: number;
}
