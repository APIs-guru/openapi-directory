import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConferenceSolution } from "./conferencesolution";
import { CreateConferenceRequest } from "./createconferencerequest";
import { EntryPoint } from "./entrypoint";
import { ConferenceParameters } from "./conferenceparameters";



export class ConferenceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conferenceId" })
  conferenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=conferenceSolution" })
  conferenceSolution?: ConferenceSolution;

  @SpeakeasyMetadata({ data: "json, name=createRequest" })
  createRequest?: CreateConferenceRequest;

  @SpeakeasyMetadata({ data: "json, name=entryPoints", elemType: EntryPoint })
  entryPoints?: EntryPoint[];

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: ConferenceParameters;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;
}
