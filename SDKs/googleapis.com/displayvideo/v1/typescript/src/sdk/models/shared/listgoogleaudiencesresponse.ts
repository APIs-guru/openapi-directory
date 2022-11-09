import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAudience } from "./googleaudience";


export class ListGoogleAudiencesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=googleAudiences", elemType: shared.GoogleAudience })
  googleAudiences?: GoogleAudience[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
