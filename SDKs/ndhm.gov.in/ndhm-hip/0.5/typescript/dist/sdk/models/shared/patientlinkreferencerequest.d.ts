import { SpeakeasyBase } from "../../../internal/utils";
import { CareContext } from "./carecontext";
export declare class PatientLinkReferenceRequestPatient extends SpeakeasyBase {
    careContexts: CareContext[];
    id: string;
    referenceNumber: string;
}
export declare class PatientLinkReferenceRequest extends SpeakeasyBase {
    patient: PatientLinkReferenceRequestPatient;
    requestId: string;
    timestamp: Date;
    transactionId: string;
}
