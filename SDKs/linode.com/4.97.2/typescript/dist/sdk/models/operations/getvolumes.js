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
var GetVolumesQueryParams = /** @class */ (function (_super) {
    __extends(GetVolumesQueryParams, _super);
    function GetVolumesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVolumesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetVolumesQueryParams.prototype, "pageSize", void 0);
    return GetVolumesQueryParams;
}(SpeakeasyBase));
export { GetVolumesQueryParams };
var GetVolumesSecurity = /** @class */ (function (_super) {
    __extends(GetVolumesSecurity, _super);
    function GetVolumesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetVolumesSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetVolumesSecurity.prototype, "oauth", void 0);
    return GetVolumesSecurity;
}(SpeakeasyBase));
export { GetVolumesSecurity };
var GetVolumes200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetVolumes200ApplicationJson, _super);
    function GetVolumes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Volume }),
        __metadata("design:type", Array)
    ], GetVolumes200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetVolumes200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetVolumes200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetVolumes200ApplicationJson.prototype, "results", void 0);
    return GetVolumes200ApplicationJson;
}(SpeakeasyBase));
export { GetVolumes200ApplicationJson };
var GetVolumesDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetVolumesDefaultApplicationJson, _super);
    function GetVolumesDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetVolumesDefaultApplicationJson.prototype, "errors", void 0);
    return GetVolumesDefaultApplicationJson;
}(SpeakeasyBase));
export { GetVolumesDefaultApplicationJson };
var GetVolumesRequest = /** @class */ (function (_super) {
    __extends(GetVolumesRequest, _super);
    function GetVolumesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVolumesQueryParams)
    ], GetVolumesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVolumesSecurity)
    ], GetVolumesRequest.prototype, "security", void 0);
    return GetVolumesRequest;
}(SpeakeasyBase));
export { GetVolumesRequest };
var GetVolumesResponse = /** @class */ (function (_super) {
    __extends(GetVolumesResponse, _super);
    function GetVolumesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVolumesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVolumesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVolumes200ApplicationJson)
    ], GetVolumesResponse.prototype, "getVolumes200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVolumesDefaultApplicationJson)
    ], GetVolumesResponse.prototype, "getVolumesDefaultApplicationJsonObject", void 0);
    return GetVolumesResponse;
}(SpeakeasyBase));
export { GetVolumesResponse };
