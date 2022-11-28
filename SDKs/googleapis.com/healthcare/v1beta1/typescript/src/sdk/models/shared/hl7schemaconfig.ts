import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaGroup } from "./schemagroup";
import { VersionSource } from "./versionsource";



// Hl7SchemaConfig
/** 
 * Root config message for HL7v2 schema. This contains a schema structure of groups and segments, and filters that determine which messages to apply the schema structure to.
**/
export class Hl7SchemaConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageSchemaConfigs", elemType: SchemaGroup })
  messageSchemaConfigs?: Map<string, SchemaGroup>;

  @SpeakeasyMetadata({ data: "json, name=version", elemType: VersionSource })
  version?: VersionSource[];
}
