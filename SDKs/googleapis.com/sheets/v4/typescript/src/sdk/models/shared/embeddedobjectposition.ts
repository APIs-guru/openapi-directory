import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OverlayPosition } from "./overlayposition";


// EmbeddedObjectPosition
/** 
 * The position of an embedded object such as a chart.
**/
export class EmbeddedObjectPosition extends SpeakeasyBase {
  @Metadata({ data: "json, name=newSheet" })
  newSheet?: boolean;

  @Metadata({ data: "json, name=overlayPosition" })
  overlayPosition?: OverlayPosition;

  @Metadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
