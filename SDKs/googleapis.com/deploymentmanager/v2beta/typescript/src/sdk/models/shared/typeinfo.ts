import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypeInfoSchemaInfo } from "./typeinfoschemainfo";



// TypeInfo
/** 
 * Type Information. Contains detailed information about a composite type, base type, or base type with specific collection.
**/
export class TypeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=documentationLink" })
  documentationLink?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: TypeInfoSchemaInfo;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
