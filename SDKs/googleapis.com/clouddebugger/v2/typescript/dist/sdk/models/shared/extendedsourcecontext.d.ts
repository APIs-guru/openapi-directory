import { SpeakeasyBase } from "../../../internal/utils";
import { SourceContext } from "./sourcecontext";
/**
 * An ExtendedSourceContext is a SourceContext combined with additional details describing the context.
**/
export declare class ExtendedSourceContext extends SpeakeasyBase {
    context?: SourceContext;
    labels?: Map<string, string>;
}
