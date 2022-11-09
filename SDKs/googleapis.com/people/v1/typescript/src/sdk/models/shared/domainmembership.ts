import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DomainMembership
/** 
 * A Google Workspace Domain membership.
**/
export class DomainMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=inViewerDomain" })
  inViewerDomain?: boolean;
}
