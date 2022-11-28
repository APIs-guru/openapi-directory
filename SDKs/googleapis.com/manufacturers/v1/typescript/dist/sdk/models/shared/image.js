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
export var ImageStatusEnum;
(function (ImageStatusEnum) {
    ImageStatusEnum["StatusUnspecified"] = "STATUS_UNSPECIFIED";
    ImageStatusEnum["PendingProcessing"] = "PENDING_PROCESSING";
    ImageStatusEnum["PendingCrawl"] = "PENDING_CRAWL";
    ImageStatusEnum["Ok"] = "OK";
    ImageStatusEnum["Roboted"] = "ROBOTED";
    ImageStatusEnum["Xroboted"] = "XROBOTED";
    ImageStatusEnum["CrawlError"] = "CRAWL_ERROR";
    ImageStatusEnum["ProcessingError"] = "PROCESSING_ERROR";
    ImageStatusEnum["DecodingError"] = "DECODING_ERROR";
    ImageStatusEnum["TooBig"] = "TOO_BIG";
    ImageStatusEnum["CrawlSkipped"] = "CRAWL_SKIPPED";
    ImageStatusEnum["Hostloaded"] = "HOSTLOADED";
    ImageStatusEnum["Http404"] = "HTTP_404";
})(ImageStatusEnum || (ImageStatusEnum = {}));
export var ImageTypeEnum;
(function (ImageTypeEnum) {
    ImageTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    ImageTypeEnum["Crawled"] = "CRAWLED";
    ImageTypeEnum["Uploaded"] = "UPLOADED";
})(ImageTypeEnum || (ImageTypeEnum = {}));
// Image
/**
 * An image.
**/
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageUrl" }),
        __metadata("design:type", String)
    ], Image.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Image.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Image.prototype, "type", void 0);
    return Image;
}(SpeakeasyBase));
export { Image };
