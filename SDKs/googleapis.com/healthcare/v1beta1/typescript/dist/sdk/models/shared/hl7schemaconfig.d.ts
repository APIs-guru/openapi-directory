import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaGroup } from "./schemagroup";
import { VersionSource } from "./versionsource";
/**
 * Root config message for HL7v2 schema. This contains a schema structure of groups and segments, and filters that determine which messages to apply the schema structure to.
**/
export declare class Hl7SchemaConfig extends SpeakeasyBase {
    messageSchemaConfigs?: Map<string, SchemaGroup>;
    version?: VersionSource[];
}
