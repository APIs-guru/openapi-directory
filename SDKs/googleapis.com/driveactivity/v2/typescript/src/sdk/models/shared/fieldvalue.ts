import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=integer" })
  integer?: Integer;

  @SpeakeasyMetadata({ data: "json, name=selection" })
  selection?: Selection;

  @SpeakeasyMetadata({ data: "json, name=selectionList" })
  selectionList?: SelectionList;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: Text;

  @SpeakeasyMetadata({ data: "json, name=textList" })
  textList?: TextList;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: SingleUser;

  @SpeakeasyMetadata({ data: "json, name=userList" })
  userList?: UserList;
}
