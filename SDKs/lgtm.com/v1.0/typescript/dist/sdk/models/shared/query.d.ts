import { SpeakeasyBase } from "../../../internal/utils";
import { QueryProperties } from "./queryproperties";
export declare class Query extends SpeakeasyBase {
    id?: number;
    language?: string;
    name?: string;
    pack?: string;
    properties?: QueryProperties;
    url?: string;
}
