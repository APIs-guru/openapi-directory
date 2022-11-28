import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1StorageProperties } from "./googleclouddatacatalogv1storageproperties";
export declare enum GoogleCloudDatacatalogV1DataSourceServiceEnum {
    ServiceUnspecified = "SERVICE_UNSPECIFIED",
    CloudStorage = "CLOUD_STORAGE",
    Bigquery = "BIGQUERY"
}
/**
 * Physical location of an entry.
**/
export declare class GoogleCloudDatacatalogV1DataSourceInput extends SpeakeasyBase {
    resource?: string;
    service?: GoogleCloudDatacatalogV1DataSourceServiceEnum;
    storageProperties?: GoogleCloudDatacatalogV1StorageProperties;
}
/**
 * Physical location of an entry.
**/
export declare class GoogleCloudDatacatalogV1DataSource extends SpeakeasyBase {
    resource?: string;
    service?: GoogleCloudDatacatalogV1DataSourceServiceEnum;
    sourceEntry?: string;
    storageProperties?: GoogleCloudDatacatalogV1StorageProperties;
}
