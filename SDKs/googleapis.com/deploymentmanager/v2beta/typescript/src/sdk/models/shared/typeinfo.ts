import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TypeInfoSchemaInfo } from "./typeinfoschemainfo";


// TypeInfo
/** 
 * Type Information. Contains detailed information about a composite type, base type, or base type with specific collection.
**/
export class TypeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=documentationLink" })
  documentationLink?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: TypeInfoSchemaInfo;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
