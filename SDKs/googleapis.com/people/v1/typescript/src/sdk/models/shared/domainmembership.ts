import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainMembership
/** 
 * A Google Workspace Domain membership.
**/
export class DomainMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inViewerDomain" })
  inViewerDomain?: boolean;
}
