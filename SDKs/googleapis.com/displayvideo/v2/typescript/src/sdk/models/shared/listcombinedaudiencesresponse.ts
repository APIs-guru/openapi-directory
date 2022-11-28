import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CombinedAudience } from "./combinedaudience";



export class ListCombinedAudiencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=combinedAudiences", elemType: CombinedAudience })
  combinedAudiences?: CombinedAudience[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
