import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstAndThirdPartyAudience } from "./firstandthirdpartyaudience";



export class ListFirstAndThirdPartyAudiencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstAndThirdPartyAudiences", elemType: FirstAndThirdPartyAudience })
  firstAndThirdPartyAudiences?: FirstAndThirdPartyAudience[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
