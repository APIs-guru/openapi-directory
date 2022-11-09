import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SasPortalNode
/** 
 * The Node.
**/
export class SasPortalNode extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sasUserIds" })
  sasUserIds?: string[];
}
