import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterValidation } from "./parametervalidation";



// TemplateParameter
/** 
 * A configurable parameter that replaces one or more fields in the template. Parameterizable fields: - Labels - File uris - Job properties - Job arguments - Script variables - Main class (in HadoopJob and SparkJob) - Zone (in ClusterSelector)
**/
export class TemplateParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: ParameterValidation;
}
