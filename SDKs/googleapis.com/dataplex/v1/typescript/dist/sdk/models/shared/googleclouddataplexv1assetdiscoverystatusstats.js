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
// GoogleCloudDataplexV1AssetDiscoveryStatusStats
/**
 * The aggregated data statistics for the asset reported by discovery.
**/
var GoogleCloudDataplexV1AssetDiscoveryStatusStats = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1AssetDiscoveryStatusStats, _super);
    function GoogleCloudDataplexV1AssetDiscoveryStatusStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataItems" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1AssetDiscoveryStatusStats.prototype, "dataItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSize" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1AssetDiscoveryStatusStats.prototype, "dataSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filesets" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1AssetDiscoveryStatusStats.prototype, "filesets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tables" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1AssetDiscoveryStatusStats.prototype, "tables", void 0);
    return GoogleCloudDataplexV1AssetDiscoveryStatusStats;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1AssetDiscoveryStatusStats };
