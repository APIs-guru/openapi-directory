import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo
/** 
 * Information describing query expansion including whether expansion has occurred.
**/
export class GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expandedQuery" })
  expandedQuery?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pinnedResultCount" })
  pinnedResultCount?: string;
}
