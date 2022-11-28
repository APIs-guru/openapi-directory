import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MysqlColumn
/** 
 * MySQL Column.
**/
export class MysqlColumn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collation" })
  collation?: string;

  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=nullable" })
  nullable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ordinalPosition" })
  ordinalPosition?: number;

  @SpeakeasyMetadata({ data: "json, name=primaryKey" })
  primaryKey?: boolean;
}
