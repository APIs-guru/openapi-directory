import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProductViewItemIssueIssueSeverityPerDestination
/** 
 * Issue severity for all affected regions in a destination.
**/
export class ProductViewItemIssueIssueSeverityPerDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=demotedCountries" })
  demotedCountries?: string[];

  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=disapprovedCountries" })
  disapprovedCountries?: string[];
}
