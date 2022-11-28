import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpRequestContext } from "./httprequestcontext";
import { SourceLocation } from "./sourcelocation";
import { SourceReference } from "./sourcereference";



// ErrorContext
/** 
 * A description of the context in which an error occurred. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.
**/
export class ErrorContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpRequest" })
  httpRequest?: HttpRequestContext;

  @SpeakeasyMetadata({ data: "json, name=reportLocation" })
  reportLocation?: SourceLocation;

  @SpeakeasyMetadata({ data: "json, name=sourceReferences", elemType: SourceReference })
  sourceReferences?: SourceReference[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}
