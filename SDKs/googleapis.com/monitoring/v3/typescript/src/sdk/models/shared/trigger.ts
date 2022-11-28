import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Trigger
/** 
 * Specifies how many time series must fail a predicate to trigger a condition. If not specified, then a {count: 1} trigger is used.
**/
export class Trigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=percent" })
  percent?: number;
}
