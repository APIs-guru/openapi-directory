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
export var DownloadModelResponseModelFormatEnum;
(function (DownloadModelResponseModelFormatEnum) {
    DownloadModelResponseModelFormatEnum["ModelFormatUnspecified"] = "MODEL_FORMAT_UNSPECIFIED";
    DownloadModelResponseModelFormatEnum["Tflite"] = "TFLITE";
})(DownloadModelResponseModelFormatEnum || (DownloadModelResponseModelFormatEnum = {}));
// DownloadModelResponse
/**
 * The response for downloading a model to device.
**/
var DownloadModelResponse = /** @class */ (function (_super) {
    __extends(DownloadModelResponse, _super);
    function DownloadModelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloadUri" }),
        __metadata("design:type", String)
    ], DownloadModelResponse.prototype, "downloadUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], DownloadModelResponse.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelFormat" }),
        __metadata("design:type", String)
    ], DownloadModelResponse.prototype, "modelFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeBytes" }),
        __metadata("design:type", String)
    ], DownloadModelResponse.prototype, "sizeBytes", void 0);
    return DownloadModelResponse;
}(SpeakeasyBase));
export { DownloadModelResponse };
