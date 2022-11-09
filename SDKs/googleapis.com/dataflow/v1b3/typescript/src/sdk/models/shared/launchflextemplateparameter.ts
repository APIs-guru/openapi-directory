import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerSpec } from "./containerspec";
import { FlexTemplateRuntimeEnvironment } from "./flextemplateruntimeenvironment";


// LaunchFlexTemplateParameter
/** 
 * Launch FlexTemplate Parameter.
**/
export class LaunchFlexTemplateParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerSpec" })
  containerSpec?: ContainerSpec;

  @Metadata({ data: "json, name=containerSpecGcsPath" })
  containerSpecGcsPath?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: FlexTemplateRuntimeEnvironment;

  @Metadata({ data: "json, name=jobName" })
  jobName?: string;

  @Metadata({ data: "json, name=launchOptions" })
  launchOptions?: Map<string, string>;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=transformNameMappings" })
  transformNameMappings?: Map<string, string>;

  @Metadata({ data: "json, name=update" })
  update?: boolean;
}
