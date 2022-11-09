import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NamedProperty } from "./namedproperty";


// ResultDisplayField
/** 
 * Display Fields for Search Results
**/
export class ResultDisplayField extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=operatorName" })
  operatorName?: string;

  @Metadata({ data: "json, name=property" })
  property?: NamedProperty;
}
