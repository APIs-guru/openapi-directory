import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OverlayPosition } from "./overlayposition";



// EmbeddedObjectPosition
/** 
 * The position of an embedded object such as a chart.
**/
export class EmbeddedObjectPosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newSheet" })
  newSheet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=overlayPosition" })
  overlayPosition?: OverlayPosition;

  @SpeakeasyMetadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
