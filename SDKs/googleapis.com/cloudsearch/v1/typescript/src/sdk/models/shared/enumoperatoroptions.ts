import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnumOperatorOptions
/** 
 * Used to provide a search operator for enum properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. For example, if you provide no operator for a *priority* enum property with possible values *p0* and *p1*, a query that contains the term *p0* returns items that have *p0* as the value of the *priority* property, as well as any items that contain the string *p0* in other fields. If you provide an operator name for the enum, such as *priority*, then search users can use that operator to refine results to only items that have *p0* as this property's value, with the query *priority:p0*.
**/
export class EnumOperatorOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=operatorName" })
  operatorName?: string;
}
