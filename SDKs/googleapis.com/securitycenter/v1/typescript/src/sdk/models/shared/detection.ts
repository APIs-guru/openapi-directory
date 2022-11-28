import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Detection
/** 
 * Memory hash detection contributing to the binary family match.
**/
export class Detection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=binary" })
  binary?: string;

  @SpeakeasyMetadata({ data: "json, name=percentPagesMatched" })
  percentPagesMatched?: number;
}
