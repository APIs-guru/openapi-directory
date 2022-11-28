import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DriveReference
/** 
 * A lightweight reference to a shared drive.
**/
export class DriveReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
