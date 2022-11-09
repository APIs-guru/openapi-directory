import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Orientation
/** 
 * Screen orientation of the device.
**/
export class Orientation extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
