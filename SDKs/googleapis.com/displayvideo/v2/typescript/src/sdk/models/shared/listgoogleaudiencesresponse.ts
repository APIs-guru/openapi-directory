import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAudience } from "./googleaudience";



export class ListGoogleAudiencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleAudiences", elemType: GoogleAudience })
  googleAudiences?: GoogleAudience[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
