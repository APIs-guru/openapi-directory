import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceContext } from "./sourcecontext";



// ExtendedSourceContext
/** 
 * An ExtendedSourceContext is a SourceContext combined with additional details describing the context.
**/
export class ExtendedSourceContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: SourceContext;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
