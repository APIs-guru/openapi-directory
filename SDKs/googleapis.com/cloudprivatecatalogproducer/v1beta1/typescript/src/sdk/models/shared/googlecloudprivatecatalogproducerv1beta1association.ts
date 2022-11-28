import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudPrivatecatalogproducerV1beta1Association
/** 
 * An association tuple that pairs a `Catalog` to a resource
 * that can use the `Catalog`. After association, a
 * google.cloud.privatecatalog.v1beta1.Catalog becomes available to
 * consumers under specified Association.resource and all of its child
 * nodes.
 * Users who have the `cloudprivatecatalog.targets.get` permission on any of
 * the resource nodes can access the catalog and child products under the node.
 * 
 * For example, suppose the cloud resource hierarchy is as follows:
 * 
 * * organizations/example.com
 *   * folders/team
 *     * projects/test
 * 
 * After creating an association with `organizations/example.com`, the catalog
 * `catalogs/1`  is accessible from the following paths:
 * 
 * * organizations/example.com
 * * folders/team
 * * projects/test
 * 
 * Users can access them by
 * google.cloud.v1beta1.PrivateCatalog.SearchCatalogs action.
**/
export class GoogleCloudPrivatecatalogproducerV1beta1Association extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}
