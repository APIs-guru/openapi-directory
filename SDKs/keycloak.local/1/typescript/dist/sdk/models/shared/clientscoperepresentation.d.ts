import { SpeakeasyBase } from "../../../internal/utils";
import { ProtocolMapperRepresentation } from "./protocolmapperrepresentation";
export declare class ClientScopeRepresentation extends SpeakeasyBase {
    attributes?: Map<string, any>;
    description?: string;
    id?: string;
    name?: string;
    protocol?: string;
    protocolMappers?: ProtocolMapperRepresentation[];
}
