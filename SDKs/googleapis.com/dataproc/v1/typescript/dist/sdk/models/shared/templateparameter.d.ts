import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterValidation } from "./parametervalidation";
/**
 * A configurable parameter that replaces one or more fields in the template. Parameterizable fields: - Labels - File uris - Job properties - Job arguments - Script variables - Main class (in HadoopJob and SparkJob) - Zone (in ClusterSelector)
**/
export declare class TemplateParameter extends SpeakeasyBase {
    description?: string;
    fields?: string[];
    name?: string;
    validation?: ParameterValidation;
}
