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
var GetRemoteImagesPathParams = /** @class */ (function (_super) {
    __extends(GetRemoteImagesPathParams, _super);
    function GetRemoteImagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetRemoteImagesPathParams.prototype, "itemId", void 0);
    return GetRemoteImagesPathParams;
}(SpeakeasyBase));
export { GetRemoteImagesPathParams };
var GetRemoteImagesQueryParams = /** @class */ (function (_super) {
    __extends(GetRemoteImagesQueryParams, _super);
    function GetRemoteImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAllLanguages" }),
        __metadata("design:type", Boolean)
    ], GetRemoteImagesQueryParams.prototype, "includeAllLanguages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetRemoteImagesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=providerName" }),
        __metadata("design:type", String)
    ], GetRemoteImagesQueryParams.prototype, "providerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetRemoteImagesQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetRemoteImagesQueryParams.prototype, "type", void 0);
    return GetRemoteImagesQueryParams;
}(SpeakeasyBase));
export { GetRemoteImagesQueryParams };
var GetRemoteImagesSecurity = /** @class */ (function (_super) {
    __extends(GetRemoteImagesSecurity, _super);
    function GetRemoteImagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetRemoteImagesSecurity.prototype, "customAuthentication", void 0);
    return GetRemoteImagesSecurity;
}(SpeakeasyBase));
export { GetRemoteImagesSecurity };
var GetRemoteImagesRequest = /** @class */ (function (_super) {
    __extends(GetRemoteImagesRequest, _super);
    function GetRemoteImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRemoteImagesPathParams)
    ], GetRemoteImagesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRemoteImagesQueryParams)
    ], GetRemoteImagesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRemoteImagesSecurity)
    ], GetRemoteImagesRequest.prototype, "security", void 0);
    return GetRemoteImagesRequest;
}(SpeakeasyBase));
export { GetRemoteImagesRequest };
var GetRemoteImagesResponse = /** @class */ (function (_super) {
    __extends(GetRemoteImagesResponse, _super);
    function GetRemoteImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRemoteImagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRemoteImagesResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RemoteImageResult)
    ], GetRemoteImagesResponse.prototype, "remoteImageResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRemoteImagesResponse.prototype, "statusCode", void 0);
    return GetRemoteImagesResponse;
}(SpeakeasyBase));
export { GetRemoteImagesResponse };
