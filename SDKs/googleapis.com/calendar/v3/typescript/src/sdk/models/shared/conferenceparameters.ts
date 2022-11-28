import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConferenceParametersAddOnParameters } from "./conferenceparametersaddonparameters";



export class ConferenceParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addOnParameters" })
  addOnParameters?: ConferenceParametersAddOnParameters;
}
