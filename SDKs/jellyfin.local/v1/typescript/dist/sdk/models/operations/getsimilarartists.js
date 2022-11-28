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
var GetSimilarArtistsPathParams = /** @class */ (function (_super) {
    __extends(GetSimilarArtistsPathParams, _super);
    function GetSimilarArtistsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetSimilarArtistsPathParams.prototype, "itemId", void 0);
    return GetSimilarArtistsPathParams;
}(SpeakeasyBase));
export { GetSimilarArtistsPathParams };
var GetSimilarArtistsQueryParams = /** @class */ (function (_super) {
    __extends(GetSimilarArtistsQueryParams, _super);
    function GetSimilarArtistsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeArtistIds" }),
        __metadata("design:type", Array)
    ], GetSimilarArtistsQueryParams.prototype, "excludeArtistIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetSimilarArtistsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSimilarArtistsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetSimilarArtistsQueryParams.prototype, "userId", void 0);
    return GetSimilarArtistsQueryParams;
}(SpeakeasyBase));
export { GetSimilarArtistsQueryParams };
var GetSimilarArtistsSecurity = /** @class */ (function (_super) {
    __extends(GetSimilarArtistsSecurity, _super);
    function GetSimilarArtistsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetSimilarArtistsSecurity.prototype, "customAuthentication", void 0);
    return GetSimilarArtistsSecurity;
}(SpeakeasyBase));
export { GetSimilarArtistsSecurity };
var GetSimilarArtistsRequest = /** @class */ (function (_super) {
    __extends(GetSimilarArtistsRequest, _super);
    function GetSimilarArtistsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSimilarArtistsPathParams)
    ], GetSimilarArtistsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSimilarArtistsQueryParams)
    ], GetSimilarArtistsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSimilarArtistsSecurity)
    ], GetSimilarArtistsRequest.prototype, "security", void 0);
    return GetSimilarArtistsRequest;
}(SpeakeasyBase));
export { GetSimilarArtistsRequest };
var GetSimilarArtistsResponse = /** @class */ (function (_super) {
    __extends(GetSimilarArtistsResponse, _super);
    function GetSimilarArtistsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetSimilarArtistsResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSimilarArtistsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSimilarArtistsResponse.prototype, "statusCode", void 0);
    return GetSimilarArtistsResponse;
}(SpeakeasyBase));
export { GetSimilarArtistsResponse };
