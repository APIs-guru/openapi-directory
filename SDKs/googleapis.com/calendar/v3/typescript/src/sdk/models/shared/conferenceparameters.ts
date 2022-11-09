import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConferenceParametersAddOnParameters } from "./conferenceparametersaddonparameters";


export class ConferenceParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=addOnParameters" })
  addOnParameters?: ConferenceParametersAddOnParameters;
}
