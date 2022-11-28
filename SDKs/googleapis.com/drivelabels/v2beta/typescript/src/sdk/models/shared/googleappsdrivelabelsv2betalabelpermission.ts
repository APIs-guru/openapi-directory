import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum {
    LabelRoleUnspecified = "LABEL_ROLE_UNSPECIFIED",
    Reader = "READER",
    Applier = "APPLIER",
    Organizer = "ORGANIZER",
    Editor = "EDITOR"
}


// GoogleAppsDriveLabelsV2betaLabelPermission
/** 
 * The permission that applies to a principal (user, group, audience) on a label.
**/
export class GoogleAppsDriveLabelsV2betaLabelPermission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audience" })
  audience?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum;
}
