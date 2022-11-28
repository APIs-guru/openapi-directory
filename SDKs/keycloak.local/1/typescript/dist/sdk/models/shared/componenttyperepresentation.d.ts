import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigPropertyRepresentation } from "./configpropertyrepresentation";
export declare class ComponentTypeRepresentation extends SpeakeasyBase {
    helpText?: string;
    id?: string;
    metadata?: Map<string, any>;
    properties?: ConfigPropertyRepresentation[];
}
