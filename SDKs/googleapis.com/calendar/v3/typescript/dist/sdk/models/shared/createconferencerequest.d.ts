import { SpeakeasyBase } from "../../../internal/utils";
import { ConferenceSolutionKey } from "./conferencesolutionkey";
import { ConferenceRequestStatus } from "./conferencerequeststatus";
export declare class CreateConferenceRequest extends SpeakeasyBase {
    conferenceSolutionKey?: ConferenceSolutionKey;
    requestId?: string;
    status?: ConferenceRequestStatus;
}
