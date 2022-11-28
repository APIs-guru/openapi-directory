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
var UpdateVolumePathParams = /** @class */ (function (_super) {
    __extends(UpdateVolumePathParams, _super);
    function UpdateVolumePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" }),
        __metadata("design:type", Number)
    ], UpdateVolumePathParams.prototype, "volumeId", void 0);
    return UpdateVolumePathParams;
}(SpeakeasyBase));
export { UpdateVolumePathParams };
var UpdateVolumeRequestBodyInput = /** @class */ (function (_super) {
    __extends(UpdateVolumeRequestBodyInput, _super);
    function UpdateVolumeRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], UpdateVolumeRequestBodyInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], UpdateVolumeRequestBodyInput.prototype, "tags", void 0);
    return UpdateVolumeRequestBodyInput;
}(SpeakeasyBase));
export { UpdateVolumeRequestBodyInput };
var UpdateVolumeSecurity = /** @class */ (function (_super) {
    __extends(UpdateVolumeSecurity, _super);
    function UpdateVolumeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateVolumeSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateVolumeSecurity.prototype, "oauth", void 0);
    return UpdateVolumeSecurity;
}(SpeakeasyBase));
export { UpdateVolumeSecurity };
var UpdateVolumeDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateVolumeDefaultApplicationJson, _super);
    function UpdateVolumeDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateVolumeDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateVolumeDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateVolumeDefaultApplicationJson };
var UpdateVolumeRequest = /** @class */ (function (_super) {
    __extends(UpdateVolumeRequest, _super);
    function UpdateVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVolumePathParams)
    ], UpdateVolumeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateVolumeRequestBodyInput)
    ], UpdateVolumeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVolumeSecurity)
    ], UpdateVolumeRequest.prototype, "security", void 0);
    return UpdateVolumeRequest;
}(SpeakeasyBase));
export { UpdateVolumeRequest };
var UpdateVolumeResponse = /** @class */ (function (_super) {
    __extends(UpdateVolumeResponse, _super);
    function UpdateVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateVolumeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Volume)
    ], UpdateVolumeResponse.prototype, "volume", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVolumeDefaultApplicationJson)
    ], UpdateVolumeResponse.prototype, "updateVolumeDefaultApplicationJsonObject", void 0);
    return UpdateVolumeResponse;
}(SpeakeasyBase));
export { UpdateVolumeResponse };
