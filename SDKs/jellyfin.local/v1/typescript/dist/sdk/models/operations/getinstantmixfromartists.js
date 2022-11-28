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
var GetInstantMixFromArtistsPathParams = /** @class */ (function (_super) {
    __extends(GetInstantMixFromArtistsPathParams, _super);
    function GetInstantMixFromArtistsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetInstantMixFromArtistsPathParams.prototype, "id", void 0);
    return GetInstantMixFromArtistsPathParams;
}(SpeakeasyBase));
export { GetInstantMixFromArtistsPathParams };
var GetInstantMixFromArtistsQueryParams = /** @class */ (function (_super) {
    __extends(GetInstantMixFromArtistsQueryParams, _super);
    function GetInstantMixFromArtistsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" }),
        __metadata("design:type", Array)
    ], GetInstantMixFromArtistsQueryParams.prototype, "enableImageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImages" }),
        __metadata("design:type", Boolean)
    ], GetInstantMixFromArtistsQueryParams.prototype, "enableImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" }),
        __metadata("design:type", Boolean)
    ], GetInstantMixFromArtistsQueryParams.prototype, "enableUserData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetInstantMixFromArtistsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" }),
        __metadata("design:type", Number)
    ], GetInstantMixFromArtistsQueryParams.prototype, "imageTypeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetInstantMixFromArtistsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetInstantMixFromArtistsQueryParams.prototype, "userId", void 0);
    return GetInstantMixFromArtistsQueryParams;
}(SpeakeasyBase));
export { GetInstantMixFromArtistsQueryParams };
var GetInstantMixFromArtistsSecurity = /** @class */ (function (_super) {
    __extends(GetInstantMixFromArtistsSecurity, _super);
    function GetInstantMixFromArtistsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetInstantMixFromArtistsSecurity.prototype, "customAuthentication", void 0);
    return GetInstantMixFromArtistsSecurity;
}(SpeakeasyBase));
export { GetInstantMixFromArtistsSecurity };
var GetInstantMixFromArtistsRequest = /** @class */ (function (_super) {
    __extends(GetInstantMixFromArtistsRequest, _super);
    function GetInstantMixFromArtistsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstantMixFromArtistsPathParams)
    ], GetInstantMixFromArtistsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstantMixFromArtistsQueryParams)
    ], GetInstantMixFromArtistsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstantMixFromArtistsSecurity)
    ], GetInstantMixFromArtistsRequest.prototype, "security", void 0);
    return GetInstantMixFromArtistsRequest;
}(SpeakeasyBase));
export { GetInstantMixFromArtistsRequest };
var GetInstantMixFromArtistsResponse = /** @class */ (function (_super) {
    __extends(GetInstantMixFromArtistsResponse, _super);
    function GetInstantMixFromArtistsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetInstantMixFromArtistsResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInstantMixFromArtistsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInstantMixFromArtistsResponse.prototype, "statusCode", void 0);
    return GetInstantMixFromArtistsResponse;
}(SpeakeasyBase));
export { GetInstantMixFromArtistsResponse };
