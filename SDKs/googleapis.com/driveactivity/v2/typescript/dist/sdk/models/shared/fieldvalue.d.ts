import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { Integer } from "./integer";
import { Selection } from "./selection";
import { SelectionList } from "./selectionlist";
import { Text } from "./text";
import { TextList } from "./textlist";
import { SingleUser } from "./singleuser";
import { UserList } from "./userlist";
/**
 * Contains a value of a Field.
**/
export declare class FieldValue extends SpeakeasyBase {
    date?: Date;
    integer?: Integer;
    selection?: Selection;
    selectionList?: SelectionList;
    text?: Text;
    textList?: TextList;
    user?: SingleUser;
    userList?: UserList;
}
