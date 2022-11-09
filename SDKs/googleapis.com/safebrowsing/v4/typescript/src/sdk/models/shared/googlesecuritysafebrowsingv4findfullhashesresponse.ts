import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleSecuritySafebrowsingV4ThreatMatch } from "./googlesecuritysafebrowsingv4threatmatch";


export class GoogleSecuritySafebrowsingV4FindFullHashesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=matches", elemType: shared.GoogleSecuritySafebrowsingV4ThreatMatch })
  matches?: GoogleSecuritySafebrowsingV4ThreatMatch[];

  @Metadata({ data: "json, name=minimumWaitDuration" })
  minimumWaitDuration?: string;

  @Metadata({ data: "json, name=negativeCacheDuration" })
  negativeCacheDuration?: string;
}
