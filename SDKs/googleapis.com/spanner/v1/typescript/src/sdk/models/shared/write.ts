import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Write
/** 
 * Arguments to insert, update, insert_or_update, and replace operations.
**/
export class Write extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: string[];

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: any[][];
}
