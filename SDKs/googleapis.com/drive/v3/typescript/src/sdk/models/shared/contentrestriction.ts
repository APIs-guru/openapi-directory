import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";


// ContentRestriction
/** 
 * A restriction for accessing the content of the file.
**/
export class ContentRestriction extends SpeakeasyBase {
  @Metadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=restrictingUser" })
  restrictingUser?: User;

  @Metadata({ data: "json, name=restrictionTime" })
  restrictionTime?: Date;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
