import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BigQueryQuerySpec
/** 
 * Specifies a custom BigQuery query.
**/
export class BigQueryQuerySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rawQuery" })
  rawQuery?: string;
}
