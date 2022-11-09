import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MenuValue } from "./menuvalue";


// MenuItem
/** 
 * A custom menu item that can be presented to the user by a timeline item.
**/
export class MenuItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=contextual_command" })
  contextualCommand?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=payload" })
  payload?: string;

  @Metadata({ data: "json, name=removeWhenSelected" })
  removeWhenSelected?: boolean;

  @Metadata({ data: "json, name=values", elemType: shared.MenuValue })
  values?: MenuValue[];
}
