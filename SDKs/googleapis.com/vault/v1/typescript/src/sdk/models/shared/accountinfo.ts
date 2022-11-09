import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountInfo
/** 
 * The accounts to search
**/
export class AccountInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=emails" })
  emails?: string[];
}
