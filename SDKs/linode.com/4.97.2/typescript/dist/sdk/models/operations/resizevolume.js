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
var ResizeVolumePathParams = /** @class */ (function (_super) {
    __extends(ResizeVolumePathParams, _super);
    function ResizeVolumePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" }),
        __metadata("design:type", Number)
    ], ResizeVolumePathParams.prototype, "volumeId", void 0);
    return ResizeVolumePathParams;
}(SpeakeasyBase));
export { ResizeVolumePathParams };
var ResizeVolumeRequestBody = /** @class */ (function (_super) {
    __extends(ResizeVolumeRequestBody, _super);
    function ResizeVolumeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], ResizeVolumeRequestBody.prototype, "size", void 0);
    return ResizeVolumeRequestBody;
}(SpeakeasyBase));
export { ResizeVolumeRequestBody };
var ResizeVolumeSecurity = /** @class */ (function (_super) {
    __extends(ResizeVolumeSecurity, _super);
    function ResizeVolumeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], ResizeVolumeSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], ResizeVolumeSecurity.prototype, "oauth", void 0);
    return ResizeVolumeSecurity;
}(SpeakeasyBase));
export { ResizeVolumeSecurity };
var ResizeVolumeDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(ResizeVolumeDefaultApplicationJson, _super);
    function ResizeVolumeDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], ResizeVolumeDefaultApplicationJson.prototype, "errors", void 0);
    return ResizeVolumeDefaultApplicationJson;
}(SpeakeasyBase));
export { ResizeVolumeDefaultApplicationJson };
var ResizeVolumeRequest = /** @class */ (function (_super) {
    __extends(ResizeVolumeRequest, _super);
    function ResizeVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResizeVolumePathParams)
    ], ResizeVolumeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ResizeVolumeRequestBody)
    ], ResizeVolumeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResizeVolumeSecurity)
    ], ResizeVolumeRequest.prototype, "security", void 0);
    return ResizeVolumeRequest;
}(SpeakeasyBase));
export { ResizeVolumeRequest };
var ResizeVolumeResponse = /** @class */ (function (_super) {
    __extends(ResizeVolumeResponse, _super);
    function ResizeVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResizeVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResizeVolumeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ResizeVolumeResponse.prototype, "resizeVolume200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResizeVolumeDefaultApplicationJson)
    ], ResizeVolumeResponse.prototype, "resizeVolumeDefaultApplicationJsonObject", void 0);
    return ResizeVolumeResponse;
}(SpeakeasyBase));
export { ResizeVolumeResponse };
