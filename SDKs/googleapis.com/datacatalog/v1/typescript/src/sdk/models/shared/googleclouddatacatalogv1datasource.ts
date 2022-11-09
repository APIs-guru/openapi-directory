import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1StorageProperties } from "./googleclouddatacatalogv1storageproperties";

export enum GoogleCloudDatacatalogV1DataSourceServiceEnum {
    ServiceUnspecified = "SERVICE_UNSPECIFIED"
,    CloudStorage = "CLOUD_STORAGE"
,    Bigquery = "BIGQUERY"
}


// GoogleCloudDatacatalogV1DataSource
/** 
 * Physical location of an entry.
**/
export class GoogleCloudDatacatalogV1DataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=resource" })
  resource?: string;

  @Metadata({ data: "json, name=service" })
  service?: GoogleCloudDatacatalogV1DataSourceServiceEnum;

  @Metadata({ data: "json, name=sourceEntry" })
  sourceEntry?: string;

  @Metadata({ data: "json, name=storageProperties" })
  storageProperties?: GoogleCloudDatacatalogV1StorageProperties;
}
