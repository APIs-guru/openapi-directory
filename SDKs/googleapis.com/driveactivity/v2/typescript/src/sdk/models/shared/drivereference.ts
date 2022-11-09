import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DriveReference
/** 
 * A lightweight reference to a shared drive.
**/
export class DriveReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
