import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OracleColumn
/** 
 * Oracle Column.
**/
export class OracleColumn extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnName" })
  columnName?: string;

  @Metadata({ data: "json, name=dataType" })
  dataType?: string;

  @Metadata({ data: "json, name=encoding" })
  encoding?: string;

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
