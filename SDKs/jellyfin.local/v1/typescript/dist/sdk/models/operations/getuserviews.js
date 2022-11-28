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
var GetUserViewsPathParams = /** @class */ (function (_super) {
    __extends(GetUserViewsPathParams, _super);
    function GetUserViewsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GetUserViewsPathParams.prototype, "userId", void 0);
    return GetUserViewsPathParams;
}(SpeakeasyBase));
export { GetUserViewsPathParams };
var GetUserViewsQueryParams = /** @class */ (function (_super) {
    __extends(GetUserViewsQueryParams, _super);
    function GetUserViewsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeExternalContent" }),
        __metadata("design:type", Boolean)
    ], GetUserViewsQueryParams.prototype, "includeExternalContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeHidden" }),
        __metadata("design:type", Boolean)
    ], GetUserViewsQueryParams.prototype, "includeHidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=presetViews" }),
        __metadata("design:type", Array)
    ], GetUserViewsQueryParams.prototype, "presetViews", void 0);
    return GetUserViewsQueryParams;
}(SpeakeasyBase));
export { GetUserViewsQueryParams };
var GetUserViewsRequest = /** @class */ (function (_super) {
    __extends(GetUserViewsRequest, _super);
    function GetUserViewsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserViewsPathParams)
    ], GetUserViewsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserViewsQueryParams)
    ], GetUserViewsRequest.prototype, "queryParams", void 0);
    return GetUserViewsRequest;
}(SpeakeasyBase));
export { GetUserViewsRequest };
var GetUserViewsResponse = /** @class */ (function (_super) {
    __extends(GetUserViewsResponse, _super);
    function GetUserViewsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetUserViewsResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserViewsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserViewsResponse.prototype, "statusCode", void 0);
    return GetUserViewsResponse;
}(SpeakeasyBase));
export { GetUserViewsResponse };
