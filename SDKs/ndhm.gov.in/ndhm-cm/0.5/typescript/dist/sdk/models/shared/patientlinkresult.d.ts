import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { CareContextRepresentation } from "./carecontextrepresentation";
import { RequestReference } from "./requestreference";
export declare class PatientLinkResultPatient extends SpeakeasyBase {
    careContexts: CareContextRepresentation[];
    display: string;
    referenceNumber: string;
}
export declare class PatientLinkResult extends SpeakeasyBase {
    error?: Error;
    patient?: PatientLinkResultPatient;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
