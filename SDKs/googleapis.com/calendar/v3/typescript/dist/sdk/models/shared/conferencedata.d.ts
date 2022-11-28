import { SpeakeasyBase } from "../../../internal/utils";
import { ConferenceSolution } from "./conferencesolution";
import { CreateConferenceRequest } from "./createconferencerequest";
import { EntryPoint } from "./entrypoint";
import { ConferenceParameters } from "./conferenceparameters";
export declare class ConferenceData extends SpeakeasyBase {
    conferenceId?: string;
    conferenceSolution?: ConferenceSolution;
    createRequest?: CreateConferenceRequest;
    entryPoints?: EntryPoint[];
    notes?: string;
    parameters?: ConferenceParameters;
    signature?: string;
}
