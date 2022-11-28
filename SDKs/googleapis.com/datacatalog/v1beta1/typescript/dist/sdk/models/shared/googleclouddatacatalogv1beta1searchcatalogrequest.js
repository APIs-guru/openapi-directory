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
import { GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope } from "./googleclouddatacatalogv1beta1searchcatalogrequestscope";
// GoogleCloudDatacatalogV1beta1SearchCatalogRequest
/**
 * Request message for SearchCatalog.
**/
var GoogleCloudDatacatalogV1beta1SearchCatalogRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1beta1SearchCatalogRequest, _super);
    function GoogleCloudDatacatalogV1beta1SearchCatalogRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBy" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1SearchCatalogRequest.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageSize" }),
        __metadata("design:type", Number)
    ], GoogleCloudDatacatalogV1beta1SearchCatalogRequest.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageToken" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1SearchCatalogRequest.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1SearchCatalogRequest.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope)
    ], GoogleCloudDatacatalogV1beta1SearchCatalogRequest.prototype, "scope", void 0);
    return GoogleCloudDatacatalogV1beta1SearchCatalogRequest;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1beta1SearchCatalogRequest };
