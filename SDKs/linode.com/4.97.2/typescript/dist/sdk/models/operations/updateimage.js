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
var UpdateImagePathParams = /** @class */ (function (_super) {
    __extends(UpdateImagePathParams, _super);
    function UpdateImagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageId" }),
        __metadata("design:type", String)
    ], UpdateImagePathParams.prototype, "imageId", void 0);
    return UpdateImagePathParams;
}(SpeakeasyBase));
export { UpdateImagePathParams };
var UpdateImageSecurity = /** @class */ (function (_super) {
    __extends(UpdateImageSecurity, _super);
    function UpdateImageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateImageSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateImageSecurity.prototype, "oauth", void 0);
    return UpdateImageSecurity;
}(SpeakeasyBase));
export { UpdateImageSecurity };
var UpdateImageDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateImageDefaultApplicationJson, _super);
    function UpdateImageDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateImageDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateImageDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateImageDefaultApplicationJson };
var UpdateImageRequest = /** @class */ (function (_super) {
    __extends(UpdateImageRequest, _super);
    function UpdateImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateImagePathParams)
    ], UpdateImageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImagePrivateInput)
    ], UpdateImageRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateImageSecurity)
    ], UpdateImageRequest.prototype, "security", void 0);
    return UpdateImageRequest;
}(SpeakeasyBase));
export { UpdateImageRequest };
var UpdateImageResponse = /** @class */ (function (_super) {
    __extends(UpdateImageResponse, _super);
    function UpdateImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateImageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImagePrivate)
    ], UpdateImageResponse.prototype, "imagePrivate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateImageResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateImageDefaultApplicationJson)
    ], UpdateImageResponse.prototype, "updateImageDefaultApplicationJsonObject", void 0);
    return UpdateImageResponse;
}(SpeakeasyBase));
export { UpdateImageResponse };
