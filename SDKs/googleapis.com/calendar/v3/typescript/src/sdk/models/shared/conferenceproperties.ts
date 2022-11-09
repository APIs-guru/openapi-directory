import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConferenceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedConferenceSolutionTypes" })
  allowedConferenceSolutionTypes?: string[];
}
