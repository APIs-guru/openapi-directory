import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Location
/** 
 * A particular location in the document.
**/
export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=segmentId" })
  segmentId?: string;
}
