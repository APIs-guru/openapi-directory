import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";


// MinimumOrderValueTableStoreCodeSetWithMov
/** 
 * A list of store code sets sharing the same minimum order value. At least two sets are required and the last one must be empty, which signifies 'MOV for all other stores'. Each store code can only appear once across all the sets. All prices within a service must have the same currency.
**/
export class MinimumOrderValueTableStoreCodeSetWithMov extends SpeakeasyBase {
  @Metadata({ data: "json, name=storeCodes" })
  storeCodes?: string[];

  @Metadata({ data: "json, name=value" })
  value?: Price;
}
