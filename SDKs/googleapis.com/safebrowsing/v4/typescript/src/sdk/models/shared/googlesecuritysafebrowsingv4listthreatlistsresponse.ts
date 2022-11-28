import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ThreatListDescriptor } from "./googlesecuritysafebrowsingv4threatlistdescriptor";



export class GoogleSecuritySafebrowsingV4ListThreatListsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=threatLists", elemType: GoogleSecuritySafebrowsingV4ThreatListDescriptor })
  threatLists?: GoogleSecuritySafebrowsingV4ThreatListDescriptor[];
}
