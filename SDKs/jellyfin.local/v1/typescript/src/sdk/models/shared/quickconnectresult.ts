import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QuickConnectResult
/** 
 * Stores the result of an incoming quick connect request.
**/
export class QuickConnectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Authenticated" })
  authenticated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Authentication" })
  authentication?: string;

  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=DateAdded" })
  dateAdded?: Date;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=Secret" })
  secret?: string;
}
