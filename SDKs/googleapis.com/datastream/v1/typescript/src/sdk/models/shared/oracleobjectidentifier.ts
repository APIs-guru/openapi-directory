import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OracleObjectIdentifier
/** 
 * Oracle data source object identifier.
**/
export class OracleObjectIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;
}
