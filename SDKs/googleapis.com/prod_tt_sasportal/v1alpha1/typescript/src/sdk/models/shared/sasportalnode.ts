import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SasPortalNode
/** 
 * The Node.
**/
export class SasPortalNode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sasUserIds" })
  sasUserIds?: string[];
}
