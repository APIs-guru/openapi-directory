import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleIdentityAccesscontextmanagerV1AccessLevel } from "./googleidentityaccesscontextmanagerv1accesslevel";
import { GoogleIdentityAccesscontextmanagerV1AccessPolicy } from "./googleidentityaccesscontextmanagerv1accesspolicy";
import { Policy } from "./policy";
import { GoogleCloudOrgpolicyV1Policy } from "./googlecloudorgpolicyv1policy";
import { Inventory } from "./inventory";
import { RelatedAsset } from "./relatedasset";
import { RelatedAssets } from "./relatedassets";
import { Resource } from "./resource";
import { GoogleIdentityAccesscontextmanagerV1ServicePerimeter } from "./googleidentityaccesscontextmanagerv1serviceperimeter";
/**
 * An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. Cloud IAM policy), or a relationship (e.g. an INSTANCE_TO_INSTANCEGROUP relationship). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.
**/
export declare class Asset extends SpeakeasyBase {
    accessLevel?: GoogleIdentityAccesscontextmanagerV1AccessLevel;
    accessPolicy?: GoogleIdentityAccesscontextmanagerV1AccessPolicy;
    ancestors?: string[];
    assetType?: string;
    iamPolicy?: Policy;
    name?: string;
    orgPolicy?: GoogleCloudOrgpolicyV1Policy[];
    osInventory?: Inventory;
    relatedAsset?: RelatedAsset;
    relatedAssets?: RelatedAssets;
    resource?: Resource;
    servicePerimeter?: GoogleIdentityAccesscontextmanagerV1ServicePerimeter;
    updateTime?: string;
}
