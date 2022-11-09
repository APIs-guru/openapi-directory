import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConferenceSolutionKey } from "./conferencesolutionkey";
import { ConferenceRequestStatus } from "./conferencerequeststatus";


export class CreateConferenceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=conferenceSolutionKey" })
  conferenceSolutionKey?: ConferenceSolutionKey;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=status" })
  status?: ConferenceRequestStatus;
}
