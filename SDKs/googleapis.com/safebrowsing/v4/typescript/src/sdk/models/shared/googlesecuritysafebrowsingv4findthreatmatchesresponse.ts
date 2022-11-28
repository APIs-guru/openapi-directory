import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ThreatMatch } from "./googlesecuritysafebrowsingv4threatmatch";



export class GoogleSecuritySafebrowsingV4FindThreatMatchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matches", elemType: GoogleSecuritySafebrowsingV4ThreatMatch })
  matches?: GoogleSecuritySafebrowsingV4ThreatMatch[];
}
