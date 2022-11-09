import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Detection
/** 
 * Memory hash detection contributing to the binary family match.
**/
export class Detection extends SpeakeasyBase {
  @Metadata({ data: "json, name=binary" })
  binary?: string;

  @Metadata({ data: "json, name=percentPagesMatched" })
  percentPagesMatched?: number;
}
