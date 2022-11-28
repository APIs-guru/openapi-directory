import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings to change fields of a JWT token
**/
export declare class MappingSettings extends SpeakeasyBase {
    map: Map<string, string>;
    remove: string[];
    values: Map<string, string>;
}
