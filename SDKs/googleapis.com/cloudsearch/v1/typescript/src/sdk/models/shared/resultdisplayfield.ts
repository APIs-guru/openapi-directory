import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamedProperty } from "./namedproperty";



// ResultDisplayField
/** 
 * Display Fields for Search Results
**/
export class ResultDisplayField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=operatorName" })
  operatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: NamedProperty;
}
