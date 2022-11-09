import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuntimeEnvironment } from "./runtimeenvironment";


// LaunchTemplateParameters
/** 
 * Parameters to provide to the template being launched. Note that the [metadata in the pipeline code] (https://cloud.google.com/dataflow/docs/guides/templates/creating-templates#metadata) determines which runtime parameters are valid.
**/
export class LaunchTemplateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: RuntimeEnvironment;

  @Metadata({ data: "json, name=jobName" })
  jobName?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=transformNameMapping" })
  transformNameMapping?: Map<string, string>;

  @Metadata({ data: "json, name=update" })
  update?: boolean;
}
