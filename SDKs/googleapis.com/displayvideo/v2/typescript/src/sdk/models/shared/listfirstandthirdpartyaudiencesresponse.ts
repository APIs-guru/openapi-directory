import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirstAndThirdPartyAudience } from "./firstandthirdpartyaudience";


export class ListFirstAndThirdPartyAudiencesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstAndThirdPartyAudiences", elemType: shared.FirstAndThirdPartyAudience })
  firstAndThirdPartyAudiences?: FirstAndThirdPartyAudience[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
