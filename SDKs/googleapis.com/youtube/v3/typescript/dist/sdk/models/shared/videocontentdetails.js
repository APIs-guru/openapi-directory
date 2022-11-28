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
import { ContentRating } from "./contentrating";
import { AccessPolicy } from "./accesspolicy";
import { VideoContentDetailsRegionRestriction } from "./videocontentdetailsregionrestriction";
export var VideoContentDetailsCaptionEnum;
(function (VideoContentDetailsCaptionEnum) {
    VideoContentDetailsCaptionEnum["True"] = "true";
    VideoContentDetailsCaptionEnum["False"] = "false";
})(VideoContentDetailsCaptionEnum || (VideoContentDetailsCaptionEnum = {}));
export var VideoContentDetailsDefinitionEnum;
(function (VideoContentDetailsDefinitionEnum) {
    VideoContentDetailsDefinitionEnum["Sd"] = "sd";
    VideoContentDetailsDefinitionEnum["Hd"] = "hd";
})(VideoContentDetailsDefinitionEnum || (VideoContentDetailsDefinitionEnum = {}));
export var VideoContentDetailsProjectionEnum;
(function (VideoContentDetailsProjectionEnum) {
    VideoContentDetailsProjectionEnum["Rectangular"] = "rectangular";
    VideoContentDetailsProjectionEnum["ThreeHundredAndSixty"] = "360";
})(VideoContentDetailsProjectionEnum || (VideoContentDetailsProjectionEnum = {}));
// VideoContentDetails
/**
 * Details about the content of a YouTube Video.
**/
var VideoContentDetails = /** @class */ (function (_super) {
    __extends(VideoContentDetails, _super);
    function VideoContentDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caption" }),
        __metadata("design:type", String)
    ], VideoContentDetails.prototype, "caption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentRating" }),
        __metadata("design:type", ContentRating)
    ], VideoContentDetails.prototype, "contentRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countryRestriction" }),
        __metadata("design:type", AccessPolicy)
    ], VideoContentDetails.prototype, "countryRestriction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=definition" }),
        __metadata("design:type", String)
    ], VideoContentDetails.prototype, "definition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimension" }),
        __metadata("design:type", String)
    ], VideoContentDetails.prototype, "dimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], VideoContentDetails.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasCustomThumbnail" }),
        __metadata("design:type", Boolean)
    ], VideoContentDetails.prototype, "hasCustomThumbnail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licensedContent" }),
        __metadata("design:type", Boolean)
    ], VideoContentDetails.prototype, "licensedContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projection" }),
        __metadata("design:type", String)
    ], VideoContentDetails.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionRestriction" }),
        __metadata("design:type", VideoContentDetailsRegionRestriction)
    ], VideoContentDetails.prototype, "regionRestriction", void 0);
    return VideoContentDetails;
}(SpeakeasyBase));
export { VideoContentDetails };
