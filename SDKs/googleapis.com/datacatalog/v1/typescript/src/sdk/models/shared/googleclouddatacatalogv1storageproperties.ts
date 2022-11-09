import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatacatalogV1StorageProperties
/** 
 * Details the properties of the underlying storage.
**/
export class GoogleCloudDatacatalogV1StorageProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=filePattern" })
  filePattern?: string[];

  @Metadata({ data: "json, name=fileType" })
  fileType?: string;
}
