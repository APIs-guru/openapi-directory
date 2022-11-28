import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SeekRequest
/** 
 * Request for the `Seek` method.
**/
export class SeekRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=snapshot" })
  snapshot?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;
}
