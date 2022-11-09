import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Progress
/** 
 * Estimated fractional progress for each step, from `0` to `1`.
**/
export class Progress extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyzed" })
  analyzed?: number;

  @Metadata({ data: "json, name=encoded" })
  encoded?: number;

  @Metadata({ data: "json, name=notified" })
  notified?: number;

  @Metadata({ data: "json, name=uploaded" })
  uploaded?: number;
}
