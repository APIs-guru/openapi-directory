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
import { GoogleAppsCardV1BorderStyle } from "./googleappscardv1borderstyle";
import { GoogleAppsCardV1ImageCropStyle } from "./googleappscardv1imagecropstyle";
// GoogleAppsCardV1ImageComponent
/**
 * Represents an image.
**/
var GoogleAppsCardV1ImageComponent = /** @class */ (function (_super) {
    __extends(GoogleAppsCardV1ImageComponent, _super);
    function GoogleAppsCardV1ImageComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=altText" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1ImageComponent.prototype, "altText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borderStyle" }),
        __metadata("design:type", GoogleAppsCardV1BorderStyle)
    ], GoogleAppsCardV1ImageComponent.prototype, "borderStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cropStyle" }),
        __metadata("design:type", GoogleAppsCardV1ImageCropStyle)
    ], GoogleAppsCardV1ImageComponent.prototype, "cropStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageUri" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1ImageComponent.prototype, "imageUri", void 0);
    return GoogleAppsCardV1ImageComponent;
}(SpeakeasyBase));
export { GoogleAppsCardV1ImageComponent };
