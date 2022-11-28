import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRequestContext } from "./httprequestcontext";
import { SourceLocation } from "./sourcelocation";
import { SourceReference } from "./sourcereference";
/**
 * A description of the context in which an error occurred. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.
**/
export declare class ErrorContext extends SpeakeasyBase {
    httpRequest?: HttpRequestContext;
    reportLocation?: SourceLocation;
    sourceReferences?: SourceReference[];
    user?: string;
}
