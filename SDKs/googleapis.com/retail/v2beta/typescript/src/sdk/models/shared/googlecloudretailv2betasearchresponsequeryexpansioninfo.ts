import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo
/** 
 * Information describing query expansion including whether expansion has occurred.
**/
export class GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=expandedQuery" })
  expandedQuery?: boolean;

  @Metadata({ data: "json, name=pinnedResultCount" })
  pinnedResultCount?: string;
}
