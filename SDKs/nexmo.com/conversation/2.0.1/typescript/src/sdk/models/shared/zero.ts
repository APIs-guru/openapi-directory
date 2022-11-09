import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Zero
/** 
 * Connect to an App User
**/
export class Zero extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=user" })
  user: string;
}
