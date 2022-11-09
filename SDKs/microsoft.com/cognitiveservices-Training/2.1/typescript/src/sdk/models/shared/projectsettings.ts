import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectSettingsClassificationTypeEnum {
    Multiclass = "Multiclass"
,    Multilabel = "Multilabel"
}


// ProjectSettings
/** 
 * Represents settings associated with a project
**/
export class ProjectSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=classificationType, form, name=classificationType;" })
  classificationType?: ProjectSettingsClassificationTypeEnum;

  @Metadata({ data: "json, name=domainId, form, name=domainId;" })
  domainId?: string;
}
