import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListConstraint
/** 
 * A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`.
**/
export class ListConstraint extends SpeakeasyBase {
  @Metadata({ data: "json, name=suggestedValue" })
  suggestedValue?: string;

  @Metadata({ data: "json, name=supportsUnder" })
  supportsUnder?: boolean;
}
