import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse } from "./googlesecuritysafebrowsingv4fetchthreatlistupdatesresponselistupdateresponse";



export class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listUpdateResponses", elemType: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse })
  listUpdateResponses?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse[];

  @SpeakeasyMetadata({ data: "json, name=minimumWaitDuration" })
  minimumWaitDuration?: string;
}
