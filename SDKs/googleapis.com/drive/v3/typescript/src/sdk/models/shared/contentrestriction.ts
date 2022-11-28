import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



// ContentRestriction
/** 
 * A restriction for accessing the content of the file.
**/
export class ContentRestriction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictingUser" })
  restrictingUser?: User;

  @SpeakeasyMetadata({ data: "json, name=restrictionTime" })
  restrictionTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
