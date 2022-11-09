import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleSecuritySafebrowsingV4ThreatMatch } from "./googlesecuritysafebrowsingv4threatmatch";


export class GoogleSecuritySafebrowsingV4FindThreatMatchesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=matches", elemType: shared.GoogleSecuritySafebrowsingV4ThreatMatch })
  matches?: GoogleSecuritySafebrowsingV4ThreatMatch[];
}
