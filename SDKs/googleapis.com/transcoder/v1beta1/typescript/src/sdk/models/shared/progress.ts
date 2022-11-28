import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Progress
/** 
 * Estimated fractional progress for each step, from `0` to `1`.
**/
export class Progress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyzed" })
  analyzed?: number;

  @SpeakeasyMetadata({ data: "json, name=encoded" })
  encoded?: number;

  @SpeakeasyMetadata({ data: "json, name=notified" })
  notified?: number;

  @SpeakeasyMetadata({ data: "json, name=uploaded" })
  uploaded?: number;
}
