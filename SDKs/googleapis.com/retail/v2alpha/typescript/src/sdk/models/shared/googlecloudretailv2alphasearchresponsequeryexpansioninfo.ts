import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo
/** 
 * Information describing query expansion including whether expansion has occurred.
**/
export class GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=expandedQuery" })
  expandedQuery?: boolean;

  @Metadata({ data: "json, name=pinnedResultCount" })
  pinnedResultCount?: string;
}
