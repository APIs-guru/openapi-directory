import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2PartitionId
/** 
 * Datastore partition ID. A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID.
**/
export class GooglePrivacyDlpV2PartitionId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namespaceId" })
  namespaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
