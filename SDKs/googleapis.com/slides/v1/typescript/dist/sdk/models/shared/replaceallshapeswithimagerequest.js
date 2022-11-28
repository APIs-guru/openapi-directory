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
import { SubstringMatchCriteria } from "./substringmatchcriteria";
export var ReplaceAllShapesWithImageRequestImageReplaceMethodEnum;
(function (ReplaceAllShapesWithImageRequestImageReplaceMethodEnum) {
    ReplaceAllShapesWithImageRequestImageReplaceMethodEnum["ImageReplaceMethodUnspecified"] = "IMAGE_REPLACE_METHOD_UNSPECIFIED";
    ReplaceAllShapesWithImageRequestImageReplaceMethodEnum["CenterInside"] = "CENTER_INSIDE";
    ReplaceAllShapesWithImageRequestImageReplaceMethodEnum["CenterCrop"] = "CENTER_CROP";
})(ReplaceAllShapesWithImageRequestImageReplaceMethodEnum || (ReplaceAllShapesWithImageRequestImageReplaceMethodEnum = {}));
export var ReplaceAllShapesWithImageRequestReplaceMethodEnum;
(function (ReplaceAllShapesWithImageRequestReplaceMethodEnum) {
    ReplaceAllShapesWithImageRequestReplaceMethodEnum["CenterInside"] = "CENTER_INSIDE";
    ReplaceAllShapesWithImageRequestReplaceMethodEnum["CenterCrop"] = "CENTER_CROP";
})(ReplaceAllShapesWithImageRequestReplaceMethodEnum || (ReplaceAllShapesWithImageRequestReplaceMethodEnum = {}));
// ReplaceAllShapesWithImageRequest
/**
 * Replaces all shapes that match the given criteria with the provided image. The images replacing the shapes are rectangular after being inserted into the presentation and do not take on the forms of the shapes.
**/
var ReplaceAllShapesWithImageRequest = /** @class */ (function (_super) {
    __extends(ReplaceAllShapesWithImageRequest, _super);
    function ReplaceAllShapesWithImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containsText" }),
        __metadata("design:type", SubstringMatchCriteria)
    ], ReplaceAllShapesWithImageRequest.prototype, "containsText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageReplaceMethod" }),
        __metadata("design:type", String)
    ], ReplaceAllShapesWithImageRequest.prototype, "imageReplaceMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageUrl" }),
        __metadata("design:type", String)
    ], ReplaceAllShapesWithImageRequest.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageObjectIds" }),
        __metadata("design:type", Array)
    ], ReplaceAllShapesWithImageRequest.prototype, "pageObjectIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceMethod" }),
        __metadata("design:type", String)
    ], ReplaceAllShapesWithImageRequest.prototype, "replaceMethod", void 0);
    return ReplaceAllShapesWithImageRequest;
}(SpeakeasyBase));
export { ReplaceAllShapesWithImageRequest };
