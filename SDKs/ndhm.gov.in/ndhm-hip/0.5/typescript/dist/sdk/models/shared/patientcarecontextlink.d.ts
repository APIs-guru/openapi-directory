import { SpeakeasyBase } from "../../../internal/utils";
import { CareContextRepresentation } from "./carecontextrepresentation";
export declare class PatientCareContextLinkPatient extends SpeakeasyBase {
    careContexts: CareContextRepresentation[];
    display: string;
    referenceNumber: string;
}
export declare class PatientCareContextLink extends SpeakeasyBase {
    accessToken: string;
    patient: PatientCareContextLinkPatient;
}
