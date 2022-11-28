import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The producer representation of a product which is a child resource of
 * `Catalog` with display metadata and a list of `Version` resources.
**/
export declare class GoogleCloudPrivatecatalogproducerV1beta1Product extends SpeakeasyBase {
    assetType?: string;
    createTime?: string;
    displayMetadata?: Map<string, any>;
    iconUri?: string;
    name?: string;
    updateTime?: string;
}
