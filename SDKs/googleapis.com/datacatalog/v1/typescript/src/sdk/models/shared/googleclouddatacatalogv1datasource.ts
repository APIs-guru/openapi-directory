import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1StorageProperties } from "./googleclouddatacatalogv1storageproperties";


export enum GoogleCloudDatacatalogV1DataSourceServiceEnum {
    ServiceUnspecified = "SERVICE_UNSPECIFIED",
    CloudStorage = "CLOUD_STORAGE",
    Bigquery = "BIGQUERY"
}


// GoogleCloudDatacatalogV1DataSourceInput
/** 
 * Physical location of an entry.
**/
export class GoogleCloudDatacatalogV1DataSourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: GoogleCloudDatacatalogV1DataSourceServiceEnum;

  @SpeakeasyMetadata({ data: "json, name=storageProperties" })
  storageProperties?: GoogleCloudDatacatalogV1StorageProperties;
}


// GoogleCloudDatacatalogV1DataSource
/** 
 * Physical location of an entry.
**/
export class GoogleCloudDatacatalogV1DataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: GoogleCloudDatacatalogV1DataSourceServiceEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceEntry" })
  sourceEntry?: string;

  @SpeakeasyMetadata({ data: "json, name=storageProperties" })
  storageProperties?: GoogleCloudDatacatalogV1StorageProperties;
}
