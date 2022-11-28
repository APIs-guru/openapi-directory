import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AggregateBy
/** 
 * The specification of which data to aggregate.
**/
export class AggregateBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=dataTypeName" })
  dataTypeName?: string;
}
