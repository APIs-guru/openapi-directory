import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Datastore partition ID. A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID.
**/
export declare class GooglePrivacyDlpV2PartitionId extends SpeakeasyBase {
    namespaceId?: string;
    projectId?: string;
}
