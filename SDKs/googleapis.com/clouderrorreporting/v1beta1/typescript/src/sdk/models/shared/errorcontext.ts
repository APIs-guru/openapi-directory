import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HttpRequestContext } from "./httprequestcontext";
import { SourceLocation } from "./sourcelocation";
import { SourceReference } from "./sourcereference";


// ErrorContext
/** 
 * A description of the context in which an error occurred. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.
**/
export class ErrorContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpRequest" })
  httpRequest?: HttpRequestContext;

  @Metadata({ data: "json, name=reportLocation" })
  reportLocation?: SourceLocation;

  @Metadata({ data: "json, name=sourceReferences", elemType: shared.SourceReference })
  sourceReferences?: SourceReference[];

  @Metadata({ data: "json, name=user" })
  user?: string;
}
