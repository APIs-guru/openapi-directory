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
var CloneVolumePathParams = /** @class */ (function (_super) {
    __extends(CloneVolumePathParams, _super);
    function CloneVolumePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" }),
        __metadata("design:type", Number)
    ], CloneVolumePathParams.prototype, "volumeId", void 0);
    return CloneVolumePathParams;
}(SpeakeasyBase));
export { CloneVolumePathParams };
var CloneVolumeRequestBody = /** @class */ (function (_super) {
    __extends(CloneVolumeRequestBody, _super);
    function CloneVolumeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CloneVolumeRequestBody.prototype, "label", void 0);
    return CloneVolumeRequestBody;
}(SpeakeasyBase));
export { CloneVolumeRequestBody };
var CloneVolumeSecurity = /** @class */ (function (_super) {
    __extends(CloneVolumeSecurity, _super);
    function CloneVolumeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CloneVolumeSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CloneVolumeSecurity.prototype, "oauth", void 0);
    return CloneVolumeSecurity;
}(SpeakeasyBase));
export { CloneVolumeSecurity };
var CloneVolumeDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CloneVolumeDefaultApplicationJson, _super);
    function CloneVolumeDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CloneVolumeDefaultApplicationJson.prototype, "errors", void 0);
    return CloneVolumeDefaultApplicationJson;
}(SpeakeasyBase));
export { CloneVolumeDefaultApplicationJson };
var CloneVolumeRequest = /** @class */ (function (_super) {
    __extends(CloneVolumeRequest, _super);
    function CloneVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloneVolumePathParams)
    ], CloneVolumeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CloneVolumeRequestBody)
    ], CloneVolumeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloneVolumeSecurity)
    ], CloneVolumeRequest.prototype, "security", void 0);
    return CloneVolumeRequest;
}(SpeakeasyBase));
export { CloneVolumeRequest };
var CloneVolumeResponse = /** @class */ (function (_super) {
    __extends(CloneVolumeResponse, _super);
    function CloneVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloneVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloneVolumeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Volume)
    ], CloneVolumeResponse.prototype, "volume", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloneVolumeDefaultApplicationJson)
    ], CloneVolumeResponse.prototype, "cloneVolumeDefaultApplicationJsonObject", void 0);
    return CloneVolumeResponse;
}(SpeakeasyBase));
export { CloneVolumeResponse };
