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
import { GoogleCloudDatalabelingV1beta1BoundingPoly } from "./googleclouddatalabelingv1beta1boundingpoly";
import { GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly } from "./googleclouddatalabelingv1beta1normalizedboundingpoly";
// GoogleCloudDatalabelingV1beta1ObjectTrackingFrame
/**
 * Video frame level annotation for object detection and tracking.
**/
var GoogleCloudDatalabelingV1beta1ObjectTrackingFrame = /** @class */ (function (_super) {
    __extends(GoogleCloudDatalabelingV1beta1ObjectTrackingFrame, _super);
    function GoogleCloudDatalabelingV1beta1ObjectTrackingFrame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boundingPoly" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1BoundingPoly)
    ], GoogleCloudDatalabelingV1beta1ObjectTrackingFrame.prototype, "boundingPoly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=normalizedBoundingPoly" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly)
    ], GoogleCloudDatalabelingV1beta1ObjectTrackingFrame.prototype, "normalizedBoundingPoly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeOffset" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1ObjectTrackingFrame.prototype, "timeOffset", void 0);
    return GoogleCloudDatalabelingV1beta1ObjectTrackingFrame;
}(SpeakeasyBase));
export { GoogleCloudDatalabelingV1beta1ObjectTrackingFrame };
