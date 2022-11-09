import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CareContextRepresentation } from "./carecontextrepresentation";


export class PatientCareContextLinkPatient extends SpeakeasyBase {
  @Metadata({ data: "json, name=careContexts", elemType: shared.CareContextRepresentation })
  careContexts: CareContextRepresentation[];

  @Metadata({ data: "json, name=display" })
  display: string;

  @Metadata({ data: "json, name=referenceNumber" })
  referenceNumber: string;
}


export class PatientCareContextLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken: string;

  @Metadata({ data: "json, name=patient" })
  patient: PatientCareContextLinkPatient;
}
