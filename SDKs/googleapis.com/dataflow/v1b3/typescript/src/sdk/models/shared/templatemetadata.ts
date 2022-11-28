import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterMetadata } from "./parametermetadata";



// TemplateMetadata
/** 
 * Metadata describing a template.
**/
export class TemplateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: ParameterMetadata })
  parameters?: ParameterMetadata[];
}
