import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum {
    LabelRoleUnspecified = "LABEL_ROLE_UNSPECIFIED"
,    Reader = "READER"
,    Applier = "APPLIER"
,    Organizer = "ORGANIZER"
,    Editor = "EDITOR"
}


// GoogleAppsDriveLabelsV2betaLabelPermission
/** 
 * The permission that applies to a principal (user, group, audience) on a label.
**/
export class GoogleAppsDriveLabelsV2betaLabelPermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=audience" })
  audience?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=person" })
  person?: string;

  @Metadata({ data: "json, name=role" })
  role?: GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum;
}
