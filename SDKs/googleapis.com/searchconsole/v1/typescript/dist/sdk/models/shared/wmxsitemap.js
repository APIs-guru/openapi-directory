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
import * as shared from "../shared";
export var WmxSitemapTypeEnum;
(function (WmxSitemapTypeEnum) {
    WmxSitemapTypeEnum["NotSitemap"] = "NOT_SITEMAP";
    WmxSitemapTypeEnum["UrlList"] = "URL_LIST";
    WmxSitemapTypeEnum["Sitemap"] = "SITEMAP";
    WmxSitemapTypeEnum["RssFeed"] = "RSS_FEED";
    WmxSitemapTypeEnum["AtomFeed"] = "ATOM_FEED";
    WmxSitemapTypeEnum["PatternSitemap"] = "PATTERN_SITEMAP";
    WmxSitemapTypeEnum["Oceanfront"] = "OCEANFRONT";
})(WmxSitemapTypeEnum || (WmxSitemapTypeEnum = {}));
// WmxSitemap
/**
 * Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184).
**/
var WmxSitemap = /** @class */ (function (_super) {
    __extends(WmxSitemap, _super);
    function WmxSitemap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=contents", elemType: shared.WmxSitemapContent }),
        __metadata("design:type", Array)
    ], WmxSitemap.prototype, "contents", void 0);
    __decorate([
        Metadata({ data: "json, name=errors" }),
        __metadata("design:type", String)
    ], WmxSitemap.prototype, "errors", void 0);
    __decorate([
        Metadata({ data: "json, name=isPending" }),
        __metadata("design:type", Boolean)
    ], WmxSitemap.prototype, "isPending", void 0);
    __decorate([
        Metadata({ data: "json, name=isSitemapsIndex" }),
        __metadata("design:type", Boolean)
    ], WmxSitemap.prototype, "isSitemapsIndex", void 0);
    __decorate([
        Metadata({ data: "json, name=lastDownloaded" }),
        __metadata("design:type", String)
    ], WmxSitemap.prototype, "lastDownloaded", void 0);
    __decorate([
        Metadata({ data: "json, name=lastSubmitted" }),
        __metadata("design:type", String)
    ], WmxSitemap.prototype, "lastSubmitted", void 0);
    __decorate([
        Metadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], WmxSitemap.prototype, "path", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WmxSitemap.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=warnings" }),
        __metadata("design:type", String)
    ], WmxSitemap.prototype, "warnings", void 0);
    return WmxSitemap;
}(SpeakeasyBase));
export { WmxSitemap };
