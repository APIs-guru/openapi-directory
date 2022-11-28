import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyRepresentation } from "./policyrepresentation";
import { ResourceRepresentation } from "./resourcerepresentation";
export declare class ScopeRepresentation extends SpeakeasyBase {
    displayName?: string;
    iconUri?: string;
    id?: string;
    name?: string;
    policies?: PolicyRepresentation[];
    resources?: ResourceRepresentation[];
}
