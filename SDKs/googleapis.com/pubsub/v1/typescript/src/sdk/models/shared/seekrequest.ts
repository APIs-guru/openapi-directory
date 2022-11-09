import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SeekRequest
/** 
 * Request for the `Seek` method.
**/
export class SeekRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=snapshot" })
  snapshot?: string;

  @Metadata({ data: "json, name=time" })
  time?: string;
}
