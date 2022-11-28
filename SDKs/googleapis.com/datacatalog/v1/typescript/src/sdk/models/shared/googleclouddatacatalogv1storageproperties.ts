import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1StorageProperties
/** 
 * Details the properties of the underlying storage.
**/
export class GoogleCloudDatacatalogV1StorageProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filePattern" })
  filePattern?: string[];

  @SpeakeasyMetadata({ data: "json, name=fileType" })
  fileType?: string;
}
