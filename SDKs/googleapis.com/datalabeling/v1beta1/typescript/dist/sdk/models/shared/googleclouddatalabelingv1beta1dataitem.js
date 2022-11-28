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
import { GoogleCloudDatalabelingV1beta1ImagePayload } from "./googleclouddatalabelingv1beta1imagepayload";
import { GoogleCloudDatalabelingV1beta1TextPayload } from "./googleclouddatalabelingv1beta1textpayload";
import { GoogleCloudDatalabelingV1beta1VideoPayload } from "./googleclouddatalabelingv1beta1videopayload";
// GoogleCloudDatalabelingV1beta1DataItem
/**
 * DataItem is a piece of data, without annotation. For example, an image.
**/
var GoogleCloudDatalabelingV1beta1DataItem = /** @class */ (function (_super) {
    __extends(GoogleCloudDatalabelingV1beta1DataItem, _super);
    function GoogleCloudDatalabelingV1beta1DataItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imagePayload" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1ImagePayload)
    ], GoogleCloudDatalabelingV1beta1DataItem.prototype, "imagePayload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1DataItem.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textPayload" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1TextPayload)
    ], GoogleCloudDatalabelingV1beta1DataItem.prototype, "textPayload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoPayload" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1VideoPayload)
    ], GoogleCloudDatalabelingV1beta1DataItem.prototype, "videoPayload", void 0);
    return GoogleCloudDatalabelingV1beta1DataItem;
}(SpeakeasyBase));
export { GoogleCloudDatalabelingV1beta1DataItem };
