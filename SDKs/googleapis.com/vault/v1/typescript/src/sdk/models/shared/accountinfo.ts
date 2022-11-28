import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountInfo
/** 
 * The accounts to search
**/
export class AccountInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails?: string[];
}
