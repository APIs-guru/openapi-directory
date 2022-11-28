import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConferenceSolutionKey } from "./conferencesolutionkey";
import { ConferenceRequestStatus } from "./conferencerequeststatus";



export class CreateConferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conferenceSolutionKey" })
  conferenceSolutionKey?: ConferenceSolutionKey;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ConferenceRequestStatus;
}
