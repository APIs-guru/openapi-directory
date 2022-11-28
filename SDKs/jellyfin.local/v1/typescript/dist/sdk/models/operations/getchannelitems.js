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
var GetChannelItemsPathParams = /** @class */ (function (_super) {
    __extends(GetChannelItemsPathParams, _super);
    function GetChannelItemsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" }),
        __metadata("design:type", String)
    ], GetChannelItemsPathParams.prototype, "channelId", void 0);
    return GetChannelItemsPathParams;
}(SpeakeasyBase));
export { GetChannelItemsPathParams };
var GetChannelItemsQueryParams = /** @class */ (function (_super) {
    __extends(GetChannelItemsQueryParams, _super);
    function GetChannelItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetChannelItemsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" }),
        __metadata("design:type", Array)
    ], GetChannelItemsQueryParams.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=folderId" }),
        __metadata("design:type", String)
    ], GetChannelItemsQueryParams.prototype, "folderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetChannelItemsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetChannelItemsQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetChannelItemsQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetChannelItemsQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetChannelItemsQueryParams.prototype, "userId", void 0);
    return GetChannelItemsQueryParams;
}(SpeakeasyBase));
export { GetChannelItemsQueryParams };
var GetChannelItemsSecurity = /** @class */ (function (_super) {
    __extends(GetChannelItemsSecurity, _super);
    function GetChannelItemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetChannelItemsSecurity.prototype, "customAuthentication", void 0);
    return GetChannelItemsSecurity;
}(SpeakeasyBase));
export { GetChannelItemsSecurity };
var GetChannelItemsRequest = /** @class */ (function (_super) {
    __extends(GetChannelItemsRequest, _super);
    function GetChannelItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChannelItemsPathParams)
    ], GetChannelItemsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChannelItemsQueryParams)
    ], GetChannelItemsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChannelItemsSecurity)
    ], GetChannelItemsRequest.prototype, "security", void 0);
    return GetChannelItemsRequest;
}(SpeakeasyBase));
export { GetChannelItemsRequest };
var GetChannelItemsResponse = /** @class */ (function (_super) {
    __extends(GetChannelItemsResponse, _super);
    function GetChannelItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetChannelItemsResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChannelItemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChannelItemsResponse.prototype, "statusCode", void 0);
    return GetChannelItemsResponse;
}(SpeakeasyBase));
export { GetChannelItemsResponse };
