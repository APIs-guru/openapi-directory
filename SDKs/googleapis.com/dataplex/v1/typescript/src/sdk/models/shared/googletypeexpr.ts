import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleTypeExpr
/** 
 * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
**/
export class GoogleTypeExpr extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expression" })
  expression?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
