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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnalyticsInfo } from "./analyticsinfo";
import { AndroidInfo } from "./androidinfo";
import { DesktopInfo } from "./desktopinfo";
import { IosInfo } from "./iosinfo";
import { NavigationInfo } from "./navigationinfo";
import { SocialMetaTagInfo } from "./socialmetataginfo";
// DynamicLinkInfo
/**
 * Information about a Dynamic Link.
**/
var DynamicLinkInfo = /** @class */ (function (_super) {
    __extends(DynamicLinkInfo, _super);
    function DynamicLinkInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=analyticsInfo" }),
        __metadata("design:type", AnalyticsInfo)
    ], DynamicLinkInfo.prototype, "analyticsInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=androidInfo" }),
        __metadata("design:type", AndroidInfo)
    ], DynamicLinkInfo.prototype, "androidInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=desktopInfo" }),
        __metadata("design:type", DesktopInfo)
    ], DynamicLinkInfo.prototype, "desktopInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=domainUriPrefix" }),
        __metadata("design:type", String)
    ], DynamicLinkInfo.prototype, "domainUriPrefix", void 0);
    __decorate([
        Metadata({ data: "json, name=dynamicLinkDomain" }),
        __metadata("design:type", String)
    ], DynamicLinkInfo.prototype, "dynamicLinkDomain", void 0);
    __decorate([
        Metadata({ data: "json, name=iosInfo" }),
        __metadata("design:type", IosInfo)
    ], DynamicLinkInfo.prototype, "iosInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], DynamicLinkInfo.prototype, "link", void 0);
    __decorate([
        Metadata({ data: "json, name=navigationInfo" }),
        __metadata("design:type", NavigationInfo)
    ], DynamicLinkInfo.prototype, "navigationInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=socialMetaTagInfo" }),
        __metadata("design:type", SocialMetaTagInfo)
    ], DynamicLinkInfo.prototype, "socialMetaTagInfo", void 0);
    return DynamicLinkInfo;
}(SpeakeasyBase));
export { DynamicLinkInfo };
