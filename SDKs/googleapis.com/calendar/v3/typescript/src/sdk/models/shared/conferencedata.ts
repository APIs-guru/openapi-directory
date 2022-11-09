import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConferenceSolution } from "./conferencesolution";
import { CreateConferenceRequest } from "./createconferencerequest";
import { EntryPoint } from "./entrypoint";
import { ConferenceParameters } from "./conferenceparameters";


export class ConferenceData extends SpeakeasyBase {
  @Metadata({ data: "json, name=conferenceId" })
  conferenceId?: string;

  @Metadata({ data: "json, name=conferenceSolution" })
  conferenceSolution?: ConferenceSolution;

  @Metadata({ data: "json, name=createRequest" })
  createRequest?: CreateConferenceRequest;

  @Metadata({ data: "json, name=entryPoints", elemType: shared.EntryPoint })
  entryPoints?: EntryPoint[];

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: ConferenceParameters;

  @Metadata({ data: "json, name=signature" })
  signature?: string;
}
