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
import * as shared from "../shared";
var GetImagePathParams = /** @class */ (function (_super) {
    __extends(GetImagePathParams, _super);
    function GetImagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageId" }),
        __metadata("design:type", String)
    ], GetImagePathParams.prototype, "imageId", void 0);
    return GetImagePathParams;
}(SpeakeasyBase));
export { GetImagePathParams };
var GetImageDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetImageDefaultApplicationJson, _super);
    function GetImageDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetImageDefaultApplicationJson.prototype, "errors", void 0);
    return GetImageDefaultApplicationJson;
}(SpeakeasyBase));
export { GetImageDefaultApplicationJson };
var GetImageRequest = /** @class */ (function (_super) {
    __extends(GetImageRequest, _super);
    function GetImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagePathParams)
    ], GetImageRequest.prototype, "pathParams", void 0);
    return GetImageRequest;
}(SpeakeasyBase));
export { GetImageRequest };
var GetImageResponse = /** @class */ (function (_super) {
    __extends(GetImageResponse, _super);
    function GetImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetImageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImagePrivate)
    ], GetImageResponse.prototype, "imagePrivate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetImageResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImageDefaultApplicationJson)
    ], GetImageResponse.prototype, "getImageDefaultApplicationJsonObject", void 0);
    return GetImageResponse;
}(SpeakeasyBase));
export { GetImageResponse };
