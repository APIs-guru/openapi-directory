import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1RuntimeEnvironment } from "./googleclouddatapipelinesv1runtimeenvironment";


// GoogleCloudDatapipelinesV1LaunchTemplateParameters
/** 
 * Parameters to provide to the template being launched.
**/
export class GoogleCloudDatapipelinesV1LaunchTemplateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: GoogleCloudDatapipelinesV1RuntimeEnvironment;

  @Metadata({ data: "json, name=jobName" })
  jobName?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=transformNameMapping" })
  transformNameMapping?: Map<string, string>;

  @Metadata({ data: "json, name=update" })
  update?: boolean;
}
