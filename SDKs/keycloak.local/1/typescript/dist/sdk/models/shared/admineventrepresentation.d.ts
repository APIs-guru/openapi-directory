import { SpeakeasyBase } from "../../../internal/utils";
import { AuthDetailsRepresentation } from "./authdetailsrepresentation";
export declare class AdminEventRepresentation extends SpeakeasyBase {
    authDetails?: AuthDetailsRepresentation;
    error?: string;
    operationType?: string;
    realmId?: string;
    representation?: string;
    resourcePath?: string;
    resourceType?: string;
    time?: number;
}
