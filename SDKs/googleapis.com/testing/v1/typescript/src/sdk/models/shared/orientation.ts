import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Orientation
/** 
 * Screen orientation of the device.
**/
export class Orientation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
