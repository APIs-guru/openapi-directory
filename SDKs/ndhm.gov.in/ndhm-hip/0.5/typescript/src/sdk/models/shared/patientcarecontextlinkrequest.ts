import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatientCareContextLink } from "./patientcarecontextlink";



export class PatientCareContextLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link: PatientCareContextLink;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
