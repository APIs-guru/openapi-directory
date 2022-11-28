import { SpeakeasyBase } from "../../../internal/utils";
import { CareContextRepresentation } from "./carecontextrepresentation";
import { IdentifierTypeEnum } from "./identifiertypeenum";
export declare class PatientRepresentation extends SpeakeasyBase {
    careContexts?: CareContextRepresentation[];
    display: string;
    matchedBy?: IdentifierTypeEnum[];
    referenceNumber: string;
}
