import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ObjectStorageClusterStatusEnum {
    Available = "available",
    Unavailable = "unavailable"
}


// ObjectStorageCluster
/** 
 * An Object Storage Cluster
**/
export class ObjectStorageCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=static_site_domain" })
  staticSiteDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ObjectStorageClusterStatusEnum;
}
