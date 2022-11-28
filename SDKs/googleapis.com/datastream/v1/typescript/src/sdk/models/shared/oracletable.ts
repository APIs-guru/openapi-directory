import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OracleColumn } from "./oraclecolumn";



// OracleTable
/** 
 * Oracle table.
**/
export class OracleTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oracleColumns", elemType: OracleColumn })
  oracleColumns?: OracleColumn[];

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;
}
