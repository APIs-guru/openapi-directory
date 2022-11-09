import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConferenceParametersAddOnParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;
}
