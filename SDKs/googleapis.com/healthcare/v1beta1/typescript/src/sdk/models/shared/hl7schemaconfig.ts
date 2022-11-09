import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SchemaGroup } from "./schemagroup";
import { VersionSource } from "./versionsource";


// Hl7SchemaConfig
/** 
 * Root config message for HL7v2 schema. This contains a schema structure of groups and segments, and filters that determine which messages to apply the schema structure to.
**/
export class Hl7SchemaConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=messageSchemaConfigs", elemType: shared.SchemaGroup })
  messageSchemaConfigs?: Map<string, SchemaGroup>;

  @Metadata({ data: "json, name=version", elemType: shared.VersionSource })
  version?: VersionSource[];
}
