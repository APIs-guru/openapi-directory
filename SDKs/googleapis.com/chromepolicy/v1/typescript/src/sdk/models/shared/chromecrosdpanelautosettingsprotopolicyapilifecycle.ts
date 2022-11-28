import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";


export enum ChromeCrosDpanelAutosettingsProtoPolicyApiLifecyclePolicyApiLifecycleStageEnum {
    ApiUnspecified = "API_UNSPECIFIED",
    ApiPreview = "API_PREVIEW",
    ApiDevelopment = "API_DEVELOPMENT",
    ApiCurrent = "API_CURRENT",
    ApiDeprecated = "API_DEPRECATED"
}


export class ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endSupport" })
  endSupport?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=policyApiLifecycleStage" })
  policyApiLifecycleStage?: ChromeCrosDpanelAutosettingsProtoPolicyApiLifecyclePolicyApiLifecycleStageEnum;
}
