import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CombinedAudience } from "./combinedaudience";


export class ListCombinedAudiencesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=combinedAudiences", elemType: shared.CombinedAudience })
  combinedAudiences?: CombinedAudience[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
