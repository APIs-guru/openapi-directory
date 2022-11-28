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
var GetResumeItemsPathParams = /** @class */ (function (_super) {
    __extends(GetResumeItemsPathParams, _super);
    function GetResumeItemsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GetResumeItemsPathParams.prototype, "userId", void 0);
    return GetResumeItemsPathParams;
}(SpeakeasyBase));
export { GetResumeItemsPathParams };
var GetResumeItemsQueryParams = /** @class */ (function (_super) {
    __extends(GetResumeItemsQueryParams, _super);
    function GetResumeItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" }),
        __metadata("design:type", Array)
    ], GetResumeItemsQueryParams.prototype, "enableImageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImages" }),
        __metadata("design:type", Boolean)
    ], GetResumeItemsQueryParams.prototype, "enableImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableTotalRecordCount" }),
        __metadata("design:type", Boolean)
    ], GetResumeItemsQueryParams.prototype, "enableTotalRecordCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" }),
        __metadata("design:type", Boolean)
    ], GetResumeItemsQueryParams.prototype, "enableUserData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeItemTypes" }),
        __metadata("design:type", Array)
    ], GetResumeItemsQueryParams.prototype, "excludeItemTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetResumeItemsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" }),
        __metadata("design:type", Number)
    ], GetResumeItemsQueryParams.prototype, "imageTypeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeItemTypes" }),
        __metadata("design:type", Array)
    ], GetResumeItemsQueryParams.prototype, "includeItemTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetResumeItemsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaTypes" }),
        __metadata("design:type", Array)
    ], GetResumeItemsQueryParams.prototype, "mediaTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentId" }),
        __metadata("design:type", String)
    ], GetResumeItemsQueryParams.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerm" }),
        __metadata("design:type", String)
    ], GetResumeItemsQueryParams.prototype, "searchTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetResumeItemsQueryParams.prototype, "startIndex", void 0);
    return GetResumeItemsQueryParams;
}(SpeakeasyBase));
export { GetResumeItemsQueryParams };
var GetResumeItemsSecurity = /** @class */ (function (_super) {
    __extends(GetResumeItemsSecurity, _super);
    function GetResumeItemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetResumeItemsSecurity.prototype, "customAuthentication", void 0);
    return GetResumeItemsSecurity;
}(SpeakeasyBase));
export { GetResumeItemsSecurity };
var GetResumeItemsRequest = /** @class */ (function (_super) {
    __extends(GetResumeItemsRequest, _super);
    function GetResumeItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResumeItemsPathParams)
    ], GetResumeItemsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResumeItemsQueryParams)
    ], GetResumeItemsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResumeItemsSecurity)
    ], GetResumeItemsRequest.prototype, "security", void 0);
    return GetResumeItemsRequest;
}(SpeakeasyBase));
export { GetResumeItemsRequest };
var GetResumeItemsResponse = /** @class */ (function (_super) {
    __extends(GetResumeItemsResponse, _super);
    function GetResumeItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetResumeItemsResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetResumeItemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetResumeItemsResponse.prototype, "statusCode", void 0);
    return GetResumeItemsResponse;
}(SpeakeasyBase));
export { GetResumeItemsResponse };
