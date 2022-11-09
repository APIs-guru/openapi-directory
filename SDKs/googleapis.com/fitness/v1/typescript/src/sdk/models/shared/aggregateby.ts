import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AggregateBy
/** 
 * The specification of which data to aggregate.
**/
export class AggregateBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @Metadata({ data: "json, name=dataTypeName" })
  dataTypeName?: string;
}
