import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceContext } from "./sourcecontext";


// ExtendedSourceContext
/** 
 * An ExtendedSourceContext is a SourceContext combined with additional details describing the context.
**/
export class ExtendedSourceContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: SourceContext;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
