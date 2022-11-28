import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceReference
/** 
 * A reference to a particular snapshot of the source tree used to build and deploy an application.
**/
export class SourceReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
