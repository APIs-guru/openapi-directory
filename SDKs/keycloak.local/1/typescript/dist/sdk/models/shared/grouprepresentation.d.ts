import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupRepresentation extends SpeakeasyBase {
    access?: Map<string, any>;
    attributes?: Map<string, any>;
    clientRoles?: Map<string, any>;
    id?: string;
    name?: string;
    path?: string;
    realmRoles?: string[];
    subGroups?: GroupRepresentation[];
}
