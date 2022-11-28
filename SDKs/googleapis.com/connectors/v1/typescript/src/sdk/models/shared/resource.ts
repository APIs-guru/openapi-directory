import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ResourceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    GcpProject = "GCP_PROJECT",
    GcpResource = "GCP_RESOURCE",
    GcpSecretmanagerSecret = "GCP_SECRETMANAGER_SECRET",
    GcpSecretmanagerSecretVersion = "GCP_SECRETMANAGER_SECRET_VERSION"
}


// Resource
/** 
 * Resource definition
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pathTemplate" })
  pathTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ResourceTypeEnum;
}
