import { SpeakeasyBase } from "../../../internal/utils";
import { ScopeRepresentation } from "./scoperepresentation";
export declare class ResourceRepresentation extends SpeakeasyBase {
    attributes?: Map<string, any>;
    displayName?: string;
    iconUri?: string;
    id?: string;
    name?: string;
    ownerManagedAccess?: boolean;
    scopes?: ScopeRepresentation[];
    type?: string;
    uris?: string[];
}
