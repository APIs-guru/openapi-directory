import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OracleObjectIdentifier
/** 
 * Oracle data source object identifier.
**/
export class OracleObjectIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=table" })
  table?: string;
}
