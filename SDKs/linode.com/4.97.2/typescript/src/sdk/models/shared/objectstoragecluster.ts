import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ObjectStorageClusterStatusEnum {
    Available = "available"
,    Unavailable = "unavailable"
}


// ObjectStorageCluster
/** 
 * An Object Storage Cluster
**/
export class ObjectStorageCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=static_site_domain" })
  staticSiteDomain?: string;

  @Metadata({ data: "json, name=status" })
  status?: ObjectStorageClusterStatusEnum;
}
