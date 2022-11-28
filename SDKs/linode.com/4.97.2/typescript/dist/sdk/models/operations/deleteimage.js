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
var DeleteImagePathParams = /** @class */ (function (_super) {
    __extends(DeleteImagePathParams, _super);
    function DeleteImagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageId" }),
        __metadata("design:type", String)
    ], DeleteImagePathParams.prototype, "imageId", void 0);
    return DeleteImagePathParams;
}(SpeakeasyBase));
export { DeleteImagePathParams };
var DeleteImageSecurity = /** @class */ (function (_super) {
    __extends(DeleteImageSecurity, _super);
    function DeleteImageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeleteImageSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeleteImageSecurity.prototype, "oauth", void 0);
    return DeleteImageSecurity;
}(SpeakeasyBase));
export { DeleteImageSecurity };
var DeleteImageDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteImageDefaultApplicationJson, _super);
    function DeleteImageDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeleteImageDefaultApplicationJson.prototype, "errors", void 0);
    return DeleteImageDefaultApplicationJson;
}(SpeakeasyBase));
export { DeleteImageDefaultApplicationJson };
var DeleteImageRequest = /** @class */ (function (_super) {
    __extends(DeleteImageRequest, _super);
    function DeleteImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteImagePathParams)
    ], DeleteImageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteImageSecurity)
    ], DeleteImageRequest.prototype, "security", void 0);
    return DeleteImageRequest;
}(SpeakeasyBase));
export { DeleteImageRequest };
var DeleteImageResponse = /** @class */ (function (_super) {
    __extends(DeleteImageResponse, _super);
    function DeleteImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteImageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteImageResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteImageResponse.prototype, "deleteImage200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteImageDefaultApplicationJson)
    ], DeleteImageResponse.prototype, "deleteImageDefaultApplicationJsonObject", void 0);
    return DeleteImageResponse;
}(SpeakeasyBase));
export { DeleteImageResponse };
