import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SourceReference
/** 
 * A reference to a particular snapshot of the source tree used to build and deploy an application.
**/
export class SourceReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
