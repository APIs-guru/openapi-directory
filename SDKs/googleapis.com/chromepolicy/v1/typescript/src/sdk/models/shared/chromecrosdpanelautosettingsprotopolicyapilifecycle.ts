import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeDate } from "./googletypedate";

export enum ChromeCrosDpanelAutosettingsProtoPolicyApiLifecyclePolicyApiLifecycleStageEnum {
    ApiUnspecified = "API_UNSPECIFIED"
,    ApiPreview = "API_PREVIEW"
,    ApiDevelopment = "API_DEVELOPMENT"
,    ApiCurrent = "API_CURRENT"
,    ApiDeprecated = "API_DEPRECATED"
}


export class ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=endSupport" })
  endSupport?: GoogleTypeDate;

  @Metadata({ data: "json, name=policyApiLifecycleStage" })
  policyApiLifecycleStage?: ChromeCrosDpanelAutosettingsProtoPolicyApiLifecyclePolicyApiLifecycleStageEnum;
}
