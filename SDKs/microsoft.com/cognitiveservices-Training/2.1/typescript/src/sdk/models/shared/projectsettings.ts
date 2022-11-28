import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectSettingsClassificationTypeEnum {
    Multiclass = "Multiclass",
    Multilabel = "Multilabel"
}


// ProjectSettings
/** 
 * Represents settings associated with a project
**/
export class ProjectSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classificationType, form, name=classificationType;" })
  classificationType?: ProjectSettingsClassificationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=domainId, form, name=domainId;" })
  domainId?: string;
}
