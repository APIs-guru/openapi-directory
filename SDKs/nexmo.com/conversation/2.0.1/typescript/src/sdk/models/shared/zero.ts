import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Zero
/** 
 * Connect to an App User
**/
export class Zero extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: string;
}
