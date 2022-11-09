import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Location
/** 
 * A particular location in the document.
**/
export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=segmentId" })
  segmentId?: string;
}
