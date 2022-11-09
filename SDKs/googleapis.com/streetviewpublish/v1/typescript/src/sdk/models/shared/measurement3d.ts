import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Measurement3d
/** 
 * A Generic 3d measurement sample.
**/
export class Measurement3d extends SpeakeasyBase {
  @Metadata({ data: "json, name=captureTime" })
  captureTime?: string;

  @Metadata({ data: "json, name=x" })
  x?: number;

  @Metadata({ data: "json, name=y" })
  y?: number;

  @Metadata({ data: "json, name=z" })
  z?: number;
}
