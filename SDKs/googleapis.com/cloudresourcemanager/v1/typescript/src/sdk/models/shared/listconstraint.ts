import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListConstraint
/** 
 * A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`.
**/
export class ListConstraint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suggestedValue" })
  suggestedValue?: string;

  @SpeakeasyMetadata({ data: "json, name=supportsUnder" })
  supportsUnder?: boolean;
}
