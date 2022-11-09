import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=appliedLabelChange" })
  appliedLabelChange?: AppliedLabelChange;

  @Metadata({ data: "json, name=comment" })
  comment?: Comment;

  @Metadata({ data: "json, name=create" })
  create?: Create;

  @Metadata({ data: "json, name=delete" })
  delete?: Delete;

  @Metadata({ data: "json, name=dlpChange" })
  dlpChange?: DataLeakPreventionChange;

  @Metadata({ data: "json, name=edit" })
  edit?: Map<string, any>;

  @Metadata({ data: "json, name=move" })
  move?: Move;

  @Metadata({ data: "json, name=permissionChange" })
  permissionChange?: PermissionChange;

  @Metadata({ data: "json, name=reference" })
  reference?: ApplicationReference;

  @Metadata({ data: "json, name=rename" })
  rename?: Rename;

  @Metadata({ data: "json, name=restore" })
  restore?: Restore;

  @Metadata({ data: "json, name=settingsChange" })
  settingsChange?: SettingsChange;
}
