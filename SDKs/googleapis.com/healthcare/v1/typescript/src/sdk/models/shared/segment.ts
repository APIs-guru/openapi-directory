import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Segment
/** 
 * A segment in a structured format.
**/
export class Segment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=segmentId" })
  segmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=setId" })
  setId?: string;
}
