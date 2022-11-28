import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProductViewItemIssueIssueSeverityPerDestination
/** 
 * Issue severity for all affected regions in a destination.
**/
export class ProductViewItemIssueIssueSeverityPerDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=demotedCountries" })
  demotedCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=disapprovedCountries" })
  disapprovedCountries?: string[];
}
