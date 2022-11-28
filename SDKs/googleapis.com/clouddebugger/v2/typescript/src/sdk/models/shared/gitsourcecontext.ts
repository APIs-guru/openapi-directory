import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GitSourceContext
/** 
 * A GitSourceContext denotes a particular revision in a third party Git repository (e.g. GitHub).
**/
export class GitSourceContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
