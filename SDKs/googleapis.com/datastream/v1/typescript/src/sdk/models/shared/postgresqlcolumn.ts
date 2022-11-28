import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PostgresqlColumn
/** 
 * PostgreSQL Column.
**/
export class PostgresqlColumn extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=primaryKey" })
  primaryKey?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scale" })
  scale?: number;
}
