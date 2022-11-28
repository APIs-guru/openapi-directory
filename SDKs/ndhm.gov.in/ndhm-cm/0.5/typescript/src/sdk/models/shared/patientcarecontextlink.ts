import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CareContextRepresentation } from "./carecontextrepresentation";



export class PatientCareContextLinkPatient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=careContexts", elemType: CareContextRepresentation })
  careContexts: CareContextRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=display" })
  display: string;

  @SpeakeasyMetadata({ data: "json, name=referenceNumber" })
  referenceNumber: string;
}


export class PatientCareContextLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: PatientCareContextLinkPatient;
}
