import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment } from "./googleclouddatapipelinesv1flextemplateruntimeenvironment";


// GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter
/** 
 * Launch Flex Template parameter.
**/
export class GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerSpecGcsPath" })
  containerSpecGcsPath?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment;

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
