import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BigQueryQuerySpec
/** 
 * Specifies a custom BigQuery query.
**/
export class BigQueryQuerySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=rawQuery" })
  rawQuery?: string;
}
