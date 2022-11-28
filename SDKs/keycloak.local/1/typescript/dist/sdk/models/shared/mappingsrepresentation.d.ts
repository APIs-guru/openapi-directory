import { SpeakeasyBase } from "../../../internal/utils";
import { RoleRepresentation } from "./rolerepresentation";
export declare class MappingsRepresentation extends SpeakeasyBase {
    clientMappings?: Map<string, any>;
    realmMappings?: RoleRepresentation[];
}
