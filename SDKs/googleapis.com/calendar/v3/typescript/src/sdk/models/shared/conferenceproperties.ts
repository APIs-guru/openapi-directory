import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConferenceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedConferenceSolutionTypes" })
  allowedConferenceSolutionTypes?: string[];
}
