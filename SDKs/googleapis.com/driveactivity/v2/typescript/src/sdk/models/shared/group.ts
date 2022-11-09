import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Group
/** 
 * Information about a group.
**/
export class Group extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
