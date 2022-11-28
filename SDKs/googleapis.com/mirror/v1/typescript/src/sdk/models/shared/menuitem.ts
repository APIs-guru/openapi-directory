import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MenuValue } from "./menuvalue";



// MenuItem
/** 
 * A custom menu item that can be presented to the user by a timeline item.
**/
export class MenuItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=contextual_command" })
  contextualCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;

  @SpeakeasyMetadata({ data: "json, name=removeWhenSelected" })
  removeWhenSelected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: MenuValue })
  values?: MenuValue[];
}
