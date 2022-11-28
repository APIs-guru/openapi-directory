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
var GetSimilarItemsPathParams = /** @class */ (function (_super) {
    __extends(GetSimilarItemsPathParams, _super);
    function GetSimilarItemsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetSimilarItemsPathParams.prototype, "itemId", void 0);
    return GetSimilarItemsPathParams;
}(SpeakeasyBase));
export { GetSimilarItemsPathParams };
var GetSimilarItemsQueryParams = /** @class */ (function (_super) {
    __extends(GetSimilarItemsQueryParams, _super);
    function GetSimilarItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeArtistIds" }),
        __metadata("design:type", Array)
    ], GetSimilarItemsQueryParams.prototype, "excludeArtistIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetSimilarItemsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSimilarItemsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetSimilarItemsQueryParams.prototype, "userId", void 0);
    return GetSimilarItemsQueryParams;
}(SpeakeasyBase));
export { GetSimilarItemsQueryParams };
var GetSimilarItemsSecurity = /** @class */ (function (_super) {
    __extends(GetSimilarItemsSecurity, _super);
    function GetSimilarItemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetSimilarItemsSecurity.prototype, "customAuthentication", void 0);
    return GetSimilarItemsSecurity;
}(SpeakeasyBase));
export { GetSimilarItemsSecurity };
var GetSimilarItemsRequest = /** @class */ (function (_super) {
    __extends(GetSimilarItemsRequest, _super);
    function GetSimilarItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSimilarItemsPathParams)
    ], GetSimilarItemsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSimilarItemsQueryParams)
    ], GetSimilarItemsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSimilarItemsSecurity)
    ], GetSimilarItemsRequest.prototype, "security", void 0);
    return GetSimilarItemsRequest;
}(SpeakeasyBase));
export { GetSimilarItemsRequest };
var GetSimilarItemsResponse = /** @class */ (function (_super) {
    __extends(GetSimilarItemsResponse, _super);
    function GetSimilarItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetSimilarItemsResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSimilarItemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSimilarItemsResponse.prototype, "statusCode", void 0);
    return GetSimilarItemsResponse;
}(SpeakeasyBase));
export { GetSimilarItemsResponse };
