import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Write
/** 
 * Arguments to insert, update, insert_or_update, and replace operations.
**/
export class Write extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns" })
  columns?: string[];

  @Metadata({ data: "json, name=table" })
  table?: string;

  @Metadata({ data: "json, name=values" })
  values?: any[][];
}
