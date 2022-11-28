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
import { GoogleCloudDataplexV1AssetDiscoveryStatusStats } from "./googleclouddataplexv1assetdiscoverystatusstats";
export var GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum;
(function (GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum) {
    GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum["Scheduled"] = "SCHEDULED";
    GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum["InProgress"] = "IN_PROGRESS";
    GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum["Paused"] = "PAUSED";
    GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum["Disabled"] = "DISABLED";
})(GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum || (GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum = {}));
// GoogleCloudDataplexV1AssetDiscoveryStatus
/**
 * Status of discovery for an asset.
**/
var GoogleCloudDataplexV1AssetDiscoveryStatus = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1AssetDiscoveryStatus, _super);
    function GoogleCloudDataplexV1AssetDiscoveryStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRunDuration" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1AssetDiscoveryStatus.prototype, "lastRunDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRunTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1AssetDiscoveryStatus.prototype, "lastRunTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1AssetDiscoveryStatus.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1AssetDiscoveryStatus.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stats" }),
        __metadata("design:type", GoogleCloudDataplexV1AssetDiscoveryStatusStats)
    ], GoogleCloudDataplexV1AssetDiscoveryStatus.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1AssetDiscoveryStatus.prototype, "updateTime", void 0);
    return GoogleCloudDataplexV1AssetDiscoveryStatus;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1AssetDiscoveryStatus };
