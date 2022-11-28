import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An asset identifier in Google Cloud which contains its name, type and ancestors. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. Cloud IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.
**/
export declare class RelatedAsset extends SpeakeasyBase {
    ancestors?: string[];
    asset?: string;
    assetType?: string;
    relationshipType?: string;
}
