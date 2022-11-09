import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleSecuritySafebrowsingV4ThreatListDescriptor } from "./googlesecuritysafebrowsingv4threatlistdescriptor";


export class GoogleSecuritySafebrowsingV4ListThreatListsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=threatLists", elemType: shared.GoogleSecuritySafebrowsingV4ThreatListDescriptor })
  threatLists?: GoogleSecuritySafebrowsingV4ThreatListDescriptor[];
}
