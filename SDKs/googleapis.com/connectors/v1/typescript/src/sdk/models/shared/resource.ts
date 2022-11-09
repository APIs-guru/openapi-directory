import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ResourceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    GcpProject = "GCP_PROJECT"
,    GcpResource = "GCP_RESOURCE"
,    GcpSecretmanagerSecret = "GCP_SECRETMANAGER_SECRET"
,    GcpSecretmanagerSecretVersion = "GCP_SECRETMANAGER_SECRET_VERSION"
}


// Resource
/** 
 * Resource definition
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=pathTemplate" })
  pathTemplate?: string;

  @Metadata({ data: "json, name=type" })
  type?: ResourceTypeEnum;
}
