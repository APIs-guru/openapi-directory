import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QuickConnectResult
/** 
 * Stores the result of an incoming quick connect request.
**/
export class QuickConnectResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Authenticated" })
  authenticated?: boolean;

  @Metadata({ data: "json, name=Authentication" })
  authentication?: string;

  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=DateAdded" })
  dateAdded?: Date;

  @Metadata({ data: "json, name=Error" })
  error?: string;

  @Metadata({ data: "json, name=Secret" })
  secret?: string;
}
