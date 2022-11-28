import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerSpec } from "./containerspec";
import { FlexTemplateRuntimeEnvironment } from "./flextemplateruntimeenvironment";



// LaunchFlexTemplateParameter
/** 
 * Launch FlexTemplate Parameter.
**/
export class LaunchFlexTemplateParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerSpec" })
  containerSpec?: ContainerSpec;

  @SpeakeasyMetadata({ data: "json, name=containerSpecGcsPath" })
  containerSpecGcsPath?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: FlexTemplateRuntimeEnvironment;

  @SpeakeasyMetadata({ data: "json, name=jobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=launchOptions" })
  launchOptions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=transformNameMappings" })
  transformNameMappings?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=update" })
  update?: boolean;
}
