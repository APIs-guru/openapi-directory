import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterMetadata } from "./parametermetadata";
/**
 * Metadata describing a template.
**/
export declare class TemplateMetadata extends SpeakeasyBase {
    description?: string;
    name?: string;
    parameters?: ParameterMetadata[];
}
