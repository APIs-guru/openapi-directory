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
import { GoogleCloudDatacatalogV1StorageProperties } from "./googleclouddatacatalogv1storageproperties";
export var GoogleCloudDatacatalogV1DataSourceServiceEnum;
(function (GoogleCloudDatacatalogV1DataSourceServiceEnum) {
    GoogleCloudDatacatalogV1DataSourceServiceEnum["ServiceUnspecified"] = "SERVICE_UNSPECIFIED";
    GoogleCloudDatacatalogV1DataSourceServiceEnum["CloudStorage"] = "CLOUD_STORAGE";
    GoogleCloudDatacatalogV1DataSourceServiceEnum["Bigquery"] = "BIGQUERY";
})(GoogleCloudDatacatalogV1DataSourceServiceEnum || (GoogleCloudDatacatalogV1DataSourceServiceEnum = {}));
// GoogleCloudDatacatalogV1DataSourceInput
/**
 * Physical location of an entry.
**/
var GoogleCloudDatacatalogV1DataSourceInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1DataSourceInput, _super);
    function GoogleCloudDatacatalogV1DataSourceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1DataSourceInput.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1DataSourceInput.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageProperties" }),
        __metadata("design:type", GoogleCloudDatacatalogV1StorageProperties)
    ], GoogleCloudDatacatalogV1DataSourceInput.prototype, "storageProperties", void 0);
    return GoogleCloudDatacatalogV1DataSourceInput;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1DataSourceInput };
// GoogleCloudDatacatalogV1DataSource
/**
 * Physical location of an entry.
**/
var GoogleCloudDatacatalogV1DataSource = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1DataSource, _super);
    function GoogleCloudDatacatalogV1DataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1DataSource.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1DataSource.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceEntry" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1DataSource.prototype, "sourceEntry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageProperties" }),
        __metadata("design:type", GoogleCloudDatacatalogV1StorageProperties)
    ], GoogleCloudDatacatalogV1DataSource.prototype, "storageProperties", void 0);
    return GoogleCloudDatacatalogV1DataSource;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1DataSource };
