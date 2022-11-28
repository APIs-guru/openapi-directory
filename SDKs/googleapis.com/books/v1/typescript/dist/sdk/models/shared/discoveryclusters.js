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
import { Volume } from "./volume";
var DiscoveryclustersClustersBannerWithContentContainer = /** @class */ (function (_super) {
    __extends(DiscoveryclustersClustersBannerWithContentContainer, _super);
    function DiscoveryclustersClustersBannerWithContentContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fillColorArgb" }),
        __metadata("design:type", String)
    ], DiscoveryclustersClustersBannerWithContentContainer.prototype, "fillColorArgb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageUrl" }),
        __metadata("design:type", String)
    ], DiscoveryclustersClustersBannerWithContentContainer.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maskColorArgb" }),
        __metadata("design:type", String)
    ], DiscoveryclustersClustersBannerWithContentContainer.prototype, "maskColorArgb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moreButtonText" }),
        __metadata("design:type", String)
    ], DiscoveryclustersClustersBannerWithContentContainer.prototype, "moreButtonText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moreButtonUrl" }),
        __metadata("design:type", String)
    ], DiscoveryclustersClustersBannerWithContentContainer.prototype, "moreButtonUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textColorArgb" }),
        __metadata("design:type", String)
    ], DiscoveryclustersClustersBannerWithContentContainer.prototype, "textColorArgb", void 0);
    return DiscoveryclustersClustersBannerWithContentContainer;
}(SpeakeasyBase));
export { DiscoveryclustersClustersBannerWithContentContainer };
var DiscoveryclustersClusters = /** @class */ (function (_super) {
    __extends(DiscoveryclustersClusters, _super);
    function DiscoveryclustersClusters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=banner_with_content_container" }),
        __metadata("design:type", DiscoveryclustersClustersBannerWithContentContainer)
    ], DiscoveryclustersClusters.prototype, "bannerWithContentContainer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subTitle" }),
        __metadata("design:type", String)
    ], DiscoveryclustersClusters.prototype, "subTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], DiscoveryclustersClusters.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalVolumes" }),
        __metadata("design:type", Number)
    ], DiscoveryclustersClusters.prototype, "totalVolumes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], DiscoveryclustersClusters.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume }),
        __metadata("design:type", Array)
    ], DiscoveryclustersClusters.prototype, "volumes", void 0);
    return DiscoveryclustersClusters;
}(SpeakeasyBase));
export { DiscoveryclustersClusters };
var Discoveryclusters = /** @class */ (function (_super) {
    __extends(Discoveryclusters, _super);
    function Discoveryclusters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusters", elemType: DiscoveryclustersClusters }),
        __metadata("design:type", Array)
    ], Discoveryclusters.prototype, "clusters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Discoveryclusters.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalClusters" }),
        __metadata("design:type", Number)
    ], Discoveryclusters.prototype, "totalClusters", void 0);
    return Discoveryclusters;
}(SpeakeasyBase));
export { Discoveryclusters };
