import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectSettingsClassificationTypeEnum {
    Multiclass = "Multiclass",
    Multilabel = "Multilabel"
}
/**
 * Represents settings associated with a project
**/
export declare class ProjectSettings extends SpeakeasyBase {
    classificationType?: ProjectSettingsClassificationTypeEnum;
    domainId?: string;
}
