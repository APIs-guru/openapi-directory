import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParameterValidation } from "./parametervalidation";


// TemplateParameter
/** 
 * A configurable parameter that replaces one or more fields in the template. Parameterizable fields: - Labels - File uris - Job properties - Job arguments - Script variables - Main class (in HadoopJob and SparkJob) - Zone (in ClusterSelector)
**/
export class TemplateParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fields" })
  fields?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=validation" })
  validation?: ParameterValidation;
}
