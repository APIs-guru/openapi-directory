import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1LakeMetastore
/** 
 * Settings to manage association of Dataproc Metastore with a lake.
**/
export class GoogleCloudDataplexV1LakeMetastore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;
}
