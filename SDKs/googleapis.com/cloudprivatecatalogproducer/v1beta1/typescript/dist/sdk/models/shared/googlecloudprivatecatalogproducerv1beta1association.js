var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var GoogleCloudPrivatecatalogproducerV1beta1Association = /** @class */ (function (_super) {
    __extends(GoogleCloudPrivatecatalogproducerV1beta1Association, _super);
    function GoogleCloudPrivatecatalogproducerV1beta1Association() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudPrivatecatalogproducerV1beta1Association.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudPrivatecatalogproducerV1beta1Association.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", String)
    ], GoogleCloudPrivatecatalogproducerV1beta1Association.prototype, "resource", void 0);
    return GoogleCloudPrivatecatalogproducerV1beta1Association;
}(SpeakeasyBase));
export { GoogleCloudPrivatecatalogproducerV1beta1Association };
