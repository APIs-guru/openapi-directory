import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";
import { Integer } from "./integer";
import { Selection } from "./selection";
import { SelectionList } from "./selectionlist";
import { Text } from "./text";
import { TextList } from "./textlist";
import { SingleUser } from "./singleuser";
import { UserList } from "./userlist";


// FieldValue
/** 
 * Contains a value of a Field.
**/
export class FieldValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=integer" })
  integer?: Integer;

  @Metadata({ data: "json, name=selection" })
  selection?: Selection;

  @Metadata({ data: "json, name=selectionList" })
  selectionList?: SelectionList;

  @Metadata({ data: "json, name=text" })
  text?: Text;

  @Metadata({ data: "json, name=textList" })
  textList?: TextList;

  @Metadata({ data: "json, name=user" })
  user?: SingleUser;

  @Metadata({ data: "json, name=userList" })
  userList?: UserList;
}
