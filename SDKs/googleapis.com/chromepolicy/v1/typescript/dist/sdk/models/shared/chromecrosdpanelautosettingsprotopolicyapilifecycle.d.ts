import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";
export declare enum ChromeCrosDpanelAutosettingsProtoPolicyApiLifecyclePolicyApiLifecycleStageEnum {
    ApiUnspecified = "API_UNSPECIFIED",
    ApiPreview = "API_PREVIEW",
    ApiDevelopment = "API_DEVELOPMENT",
    ApiCurrent = "API_CURRENT",
    ApiDeprecated = "API_DEPRECATED"
}
export declare class ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle extends SpeakeasyBase {
    description?: string;
    endSupport?: GoogleTypeDate;
    policyApiLifecycleStage?: ChromeCrosDpanelAutosettingsProtoPolicyApiLifecyclePolicyApiLifecycleStageEnum;
}
