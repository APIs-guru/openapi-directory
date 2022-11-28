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
import { GoogleCloudVisionV1p1beta1WebDetectionWebLabel } from "./googlecloudvisionv1p1beta1webdetectionweblabel";
import { GoogleCloudVisionV1p1beta1WebDetectionWebImage } from "./googlecloudvisionv1p1beta1webdetectionwebimage";
import { GoogleCloudVisionV1p1beta1WebDetectionWebPage } from "./googlecloudvisionv1p1beta1webdetectionwebpage";
import { GoogleCloudVisionV1p1beta1WebDetectionWebEntity } from "./googlecloudvisionv1p1beta1webdetectionwebentity";
// GoogleCloudVisionV1p1beta1WebDetection
/**
 * Relevant information for the image from the Internet.
**/
var GoogleCloudVisionV1p1beta1WebDetection = /** @class */ (function (_super) {
    __extends(GoogleCloudVisionV1p1beta1WebDetection, _super);
    function GoogleCloudVisionV1p1beta1WebDetection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bestGuessLabels", elemType: GoogleCloudVisionV1p1beta1WebDetectionWebLabel }),
        __metadata("design:type", Array)
    ], GoogleCloudVisionV1p1beta1WebDetection.prototype, "bestGuessLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullMatchingImages", elemType: GoogleCloudVisionV1p1beta1WebDetectionWebImage }),
        __metadata("design:type", Array)
    ], GoogleCloudVisionV1p1beta1WebDetection.prototype, "fullMatchingImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagesWithMatchingImages", elemType: GoogleCloudVisionV1p1beta1WebDetectionWebPage }),
        __metadata("design:type", Array)
    ], GoogleCloudVisionV1p1beta1WebDetection.prototype, "pagesWithMatchingImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partialMatchingImages", elemType: GoogleCloudVisionV1p1beta1WebDetectionWebImage }),
        __metadata("design:type", Array)
    ], GoogleCloudVisionV1p1beta1WebDetection.prototype, "partialMatchingImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visuallySimilarImages", elemType: GoogleCloudVisionV1p1beta1WebDetectionWebImage }),
        __metadata("design:type", Array)
    ], GoogleCloudVisionV1p1beta1WebDetection.prototype, "visuallySimilarImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webEntities", elemType: GoogleCloudVisionV1p1beta1WebDetectionWebEntity }),
        __metadata("design:type", Array)
    ], GoogleCloudVisionV1p1beta1WebDetection.prototype, "webEntities", void 0);
    return GoogleCloudVisionV1p1beta1WebDetection;
}(SpeakeasyBase));
export { GoogleCloudVisionV1p1beta1WebDetection };
