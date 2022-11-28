import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppliedLabelChange } from "./appliedlabelchange";
import { Comment } from "./comment";
import { Create } from "./create";
import { Delete } from "./delete";
import { DataLeakPreventionChange } from "./dataleakpreventionchange";
import { Move } from "./move";
import { PermissionChange } from "./permissionchange";
import { ApplicationReference } from "./applicationreference";
import { Rename } from "./rename";
import { Restore } from "./restore";
import { SettingsChange } from "./settingschange";



// ActionDetail
/** 
 * Data describing the type and additional information of an action.
**/
export class ActionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedLabelChange" })
  appliedLabelChange?: AppliedLabelChange;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: Comment;

  @SpeakeasyMetadata({ data: "json, name=create" })
  create?: Create;

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: Delete;

  @SpeakeasyMetadata({ data: "json, name=dlpChange" })
  dlpChange?: DataLeakPreventionChange;

  @SpeakeasyMetadata({ data: "json, name=edit" })
  edit?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=move" })
  move?: Move;

  @SpeakeasyMetadata({ data: "json, name=permissionChange" })
  permissionChange?: PermissionChange;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: ApplicationReference;

  @SpeakeasyMetadata({ data: "json, name=rename" })
  rename?: Rename;

  @SpeakeasyMetadata({ data: "json, name=restore" })
  restore?: Restore;

  @SpeakeasyMetadata({ data: "json, name=settingsChange" })
  settingsChange?: SettingsChange;
}
