import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PatientCareContextLink } from "./patientcarecontextlink";


export class PatientCareContextLinkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=link" })
  link: PatientCareContextLink;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
