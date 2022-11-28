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
var GetSimilarTrailersPathParams = /** @class */ (function (_super) {
    __extends(GetSimilarTrailersPathParams, _super);
    function GetSimilarTrailersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetSimilarTrailersPathParams.prototype, "itemId", void 0);
    return GetSimilarTrailersPathParams;
}(SpeakeasyBase));
export { GetSimilarTrailersPathParams };
var GetSimilarTrailersQueryParams = /** @class */ (function (_super) {
    __extends(GetSimilarTrailersQueryParams, _super);
    function GetSimilarTrailersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeArtistIds" }),
        __metadata("design:type", Array)
    ], GetSimilarTrailersQueryParams.prototype, "excludeArtistIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetSimilarTrailersQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSimilarTrailersQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetSimilarTrailersQueryParams.prototype, "userId", void 0);
    return GetSimilarTrailersQueryParams;
}(SpeakeasyBase));
export { GetSimilarTrailersQueryParams };
var GetSimilarTrailersSecurity = /** @class */ (function (_super) {
    __extends(GetSimilarTrailersSecurity, _super);
    function GetSimilarTrailersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetSimilarTrailersSecurity.prototype, "customAuthentication", void 0);
    return GetSimilarTrailersSecurity;
}(SpeakeasyBase));
export { GetSimilarTrailersSecurity };
var GetSimilarTrailersRequest = /** @class */ (function (_super) {
    __extends(GetSimilarTrailersRequest, _super);
    function GetSimilarTrailersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSimilarTrailersPathParams)
    ], GetSimilarTrailersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSimilarTrailersQueryParams)
    ], GetSimilarTrailersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSimilarTrailersSecurity)
    ], GetSimilarTrailersRequest.prototype, "security", void 0);
    return GetSimilarTrailersRequest;
}(SpeakeasyBase));
export { GetSimilarTrailersRequest };
var GetSimilarTrailersResponse = /** @class */ (function (_super) {
    __extends(GetSimilarTrailersResponse, _super);
    function GetSimilarTrailersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetSimilarTrailersResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSimilarTrailersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSimilarTrailersResponse.prototype, "statusCode", void 0);
    return GetSimilarTrailersResponse;
}(SpeakeasyBase));
export { GetSimilarTrailersResponse };
