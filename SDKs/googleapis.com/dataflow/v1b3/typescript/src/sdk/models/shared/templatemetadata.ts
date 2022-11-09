import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParameterMetadata } from "./parametermetadata";


// TemplateMetadata
/** 
 * Metadata describing a template.
**/
export class TemplateMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.ParameterMetadata })
  parameters?: ParameterMetadata[];
}
