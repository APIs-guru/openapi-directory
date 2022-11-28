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
import { GoogleCloudAssetV1p7beta1PartitionSpec } from "./googlecloudassetv1p7beta1partitionspec";
// GoogleCloudAssetV1p7beta1BigQueryDestination
/**
 * A BigQuery destination for exporting assets to.
**/
var GoogleCloudAssetV1p7beta1BigQueryDestination = /** @class */ (function (_super) {
    __extends(GoogleCloudAssetV1p7beta1BigQueryDestination, _super);
    function GoogleCloudAssetV1p7beta1BigQueryDestination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataset" }),
        __metadata("design:type", String)
    ], GoogleCloudAssetV1p7beta1BigQueryDestination.prototype, "dataset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=force" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudAssetV1p7beta1BigQueryDestination.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partitionSpec" }),
        __metadata("design:type", GoogleCloudAssetV1p7beta1PartitionSpec)
    ], GoogleCloudAssetV1p7beta1BigQueryDestination.prototype, "partitionSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=separateTablesPerAssetType" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudAssetV1p7beta1BigQueryDestination.prototype, "separateTablesPerAssetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=table" }),
        __metadata("design:type", String)
    ], GoogleCloudAssetV1p7beta1BigQueryDestination.prototype, "table", void 0);
    return GoogleCloudAssetV1p7beta1BigQueryDestination;
}(SpeakeasyBase));
export { GoogleCloudAssetV1p7beta1BigQueryDestination };
