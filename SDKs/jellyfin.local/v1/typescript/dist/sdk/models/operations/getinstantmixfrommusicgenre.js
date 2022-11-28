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
var GetInstantMixFromMusicGenrePathParams = /** @class */ (function (_super) {
    __extends(GetInstantMixFromMusicGenrePathParams, _super);
    function GetInstantMixFromMusicGenrePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetInstantMixFromMusicGenrePathParams.prototype, "name", void 0);
    return GetInstantMixFromMusicGenrePathParams;
}(SpeakeasyBase));
export { GetInstantMixFromMusicGenrePathParams };
var GetInstantMixFromMusicGenreQueryParams = /** @class */ (function (_super) {
    __extends(GetInstantMixFromMusicGenreQueryParams, _super);
    function GetInstantMixFromMusicGenreQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" }),
        __metadata("design:type", Array)
    ], GetInstantMixFromMusicGenreQueryParams.prototype, "enableImageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImages" }),
        __metadata("design:type", Boolean)
    ], GetInstantMixFromMusicGenreQueryParams.prototype, "enableImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" }),
        __metadata("design:type", Boolean)
    ], GetInstantMixFromMusicGenreQueryParams.prototype, "enableUserData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetInstantMixFromMusicGenreQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" }),
        __metadata("design:type", Number)
    ], GetInstantMixFromMusicGenreQueryParams.prototype, "imageTypeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetInstantMixFromMusicGenreQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetInstantMixFromMusicGenreQueryParams.prototype, "userId", void 0);
    return GetInstantMixFromMusicGenreQueryParams;
}(SpeakeasyBase));
export { GetInstantMixFromMusicGenreQueryParams };
var GetInstantMixFromMusicGenreSecurity = /** @class */ (function (_super) {
    __extends(GetInstantMixFromMusicGenreSecurity, _super);
    function GetInstantMixFromMusicGenreSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetInstantMixFromMusicGenreSecurity.prototype, "customAuthentication", void 0);
    return GetInstantMixFromMusicGenreSecurity;
}(SpeakeasyBase));
export { GetInstantMixFromMusicGenreSecurity };
var GetInstantMixFromMusicGenreRequest = /** @class */ (function (_super) {
    __extends(GetInstantMixFromMusicGenreRequest, _super);
    function GetInstantMixFromMusicGenreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstantMixFromMusicGenrePathParams)
    ], GetInstantMixFromMusicGenreRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstantMixFromMusicGenreQueryParams)
    ], GetInstantMixFromMusicGenreRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstantMixFromMusicGenreSecurity)
    ], GetInstantMixFromMusicGenreRequest.prototype, "security", void 0);
    return GetInstantMixFromMusicGenreRequest;
}(SpeakeasyBase));
export { GetInstantMixFromMusicGenreRequest };
var GetInstantMixFromMusicGenreResponse = /** @class */ (function (_super) {
    __extends(GetInstantMixFromMusicGenreResponse, _super);
    function GetInstantMixFromMusicGenreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetInstantMixFromMusicGenreResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInstantMixFromMusicGenreResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInstantMixFromMusicGenreResponse.prototype, "statusCode", void 0);
    return GetInstantMixFromMusicGenreResponse;
}(SpeakeasyBase));
export { GetInstantMixFromMusicGenreResponse };
