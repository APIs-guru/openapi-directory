import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleIdentityAccesscontextmanagerV1AccessLevel } from "./googleidentityaccesscontextmanagerv1accesslevel";
import { GoogleIdentityAccesscontextmanagerV1AccessPolicy } from "./googleidentityaccesscontextmanagerv1accesspolicy";
import { Policy } from "./policy";
import { GoogleCloudOrgpolicyV1Policy } from "./googlecloudorgpolicyv1policy";
import { Inventory } from "./inventory";
import { RelatedAsset } from "./relatedasset";
import { RelatedAssets } from "./relatedassets";
import { Resource } from "./resource";
import { GoogleIdentityAccesscontextmanagerV1ServicePerimeter } from "./googleidentityaccesscontextmanagerv1serviceperimeter";


// Asset
/** 
 * An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. Cloud IAM policy), or a relationship (e.g. an INSTANCE_TO_INSTANCEGROUP relationship). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.
**/
export class Asset extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessLevel" })
  accessLevel?: GoogleIdentityAccesscontextmanagerV1AccessLevel;

  @Metadata({ data: "json, name=accessPolicy" })
  accessPolicy?: GoogleIdentityAccesscontextmanagerV1AccessPolicy;

  @Metadata({ data: "json, name=ancestors" })
  ancestors?: string[];

  @Metadata({ data: "json, name=assetType" })
  assetType?: string;

  @Metadata({ data: "json, name=iamPolicy" })
  iamPolicy?: Policy;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=orgPolicy", elemType: shared.GoogleCloudOrgpolicyV1Policy })
  orgPolicy?: GoogleCloudOrgpolicyV1Policy[];

  @Metadata({ data: "json, name=osInventory" })
  osInventory?: Inventory;

  @Metadata({ data: "json, name=relatedAsset" })
  relatedAsset?: RelatedAsset;

  @Metadata({ data: "json, name=relatedAssets" })
  relatedAssets?: RelatedAssets;

  @Metadata({ data: "json, name=resource" })
  resource?: Resource;

  @Metadata({ data: "json, name=servicePerimeter" })
  servicePerimeter?: GoogleIdentityAccesscontextmanagerV1ServicePerimeter;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
