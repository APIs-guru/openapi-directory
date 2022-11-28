import { SpeakeasyBase } from "../../../internal/utils";
import { RoleRepresentationComposites } from "./rolerepresentationcomposites";
export declare class RoleRepresentation extends SpeakeasyBase {
    attributes?: Map<string, any>;
    clientRole?: boolean;
    composite?: boolean;
    composites?: RoleRepresentationComposites;
    containerId?: string;
    description?: string;
    id?: string;
    name?: string;
}
