import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse } from "./googlesecuritysafebrowsingv4fetchthreatlistupdatesresponselistupdateresponse";


export class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=listUpdateResponses", elemType: shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse })
  listUpdateResponses?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse[];

  @Metadata({ data: "json, name=minimumWaitDuration" })
  minimumWaitDuration?: string;
}
