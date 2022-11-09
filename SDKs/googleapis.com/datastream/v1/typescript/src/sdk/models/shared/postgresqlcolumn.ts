import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PostgresqlColumn
/** 
 * PostgreSQL Column.
**/
export class PostgresqlColumn extends SpeakeasyBase {
  @Metadata({ data: "json, name=column" })
  column?: string;

  @Metadata({ data: "json, name=dataType" })
  dataType?: string;

  @Metadata({ data: "json, name=length" })
  length?: number;

  @Metadata({ data: "json, name=nullable" })
  nullable?: boolean;

  @Metadata({ data: "json, name=ordinalPosition" })
  ordinalPosition?: number;

  @Metadata({ data: "json, name=precision" })
  precision?: number;

  @Metadata({ data: "json, name=primaryKey" })
  primaryKey?: boolean;

  @Metadata({ data: "json, name=scale" })
  scale?: number;
}
