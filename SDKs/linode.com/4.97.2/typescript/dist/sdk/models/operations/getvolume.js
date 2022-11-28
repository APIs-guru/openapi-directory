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
var GetVolumePathParams = /** @class */ (function (_super) {
    __extends(GetVolumePathParams, _super);
    function GetVolumePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" }),
        __metadata("design:type", Number)
    ], GetVolumePathParams.prototype, "volumeId", void 0);
    return GetVolumePathParams;
}(SpeakeasyBase));
export { GetVolumePathParams };
var GetVolumeQueryParams = /** @class */ (function (_super) {
    __extends(GetVolumeQueryParams, _super);
    function GetVolumeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVolumeQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetVolumeQueryParams.prototype, "pageSize", void 0);
    return GetVolumeQueryParams;
}(SpeakeasyBase));
export { GetVolumeQueryParams };
var GetVolumeSecurity = /** @class */ (function (_super) {
    __extends(GetVolumeSecurity, _super);
    function GetVolumeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetVolumeSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetVolumeSecurity.prototype, "oauth", void 0);
    return GetVolumeSecurity;
}(SpeakeasyBase));
export { GetVolumeSecurity };
var GetVolumeDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetVolumeDefaultApplicationJson, _super);
    function GetVolumeDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetVolumeDefaultApplicationJson.prototype, "errors", void 0);
    return GetVolumeDefaultApplicationJson;
}(SpeakeasyBase));
export { GetVolumeDefaultApplicationJson };
var GetVolumeRequest = /** @class */ (function (_super) {
    __extends(GetVolumeRequest, _super);
    function GetVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVolumePathParams)
    ], GetVolumeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVolumeQueryParams)
    ], GetVolumeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVolumeSecurity)
    ], GetVolumeRequest.prototype, "security", void 0);
    return GetVolumeRequest;
}(SpeakeasyBase));
export { GetVolumeRequest };
var GetVolumeResponse = /** @class */ (function (_super) {
    __extends(GetVolumeResponse, _super);
    function GetVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVolumeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Volume)
    ], GetVolumeResponse.prototype, "volume", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVolumeDefaultApplicationJson)
    ], GetVolumeResponse.prototype, "getVolumeDefaultApplicationJsonObject", void 0);
    return GetVolumeResponse;
}(SpeakeasyBase));
export { GetVolumeResponse };
