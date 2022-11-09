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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetResourcesMediaMostPopularMediaFormatPathParams = /** @class */ (function (_super) {
    __extends(GetResourcesMediaMostPopularMediaFormatPathParams, _super);
    function GetResourcesMediaMostPopularMediaFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetResourcesMediaMostPopularMediaFormatPathParams.prototype, "format", void 0);
    return GetResourcesMediaMostPopularMediaFormatPathParams;
}(SpeakeasyBase));
export { GetResourcesMediaMostPopularMediaFormatPathParams };
var GetResourcesMediaMostPopularMediaFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetResourcesMediaMostPopularMediaFormatQueryParams, _super);
    function GetResourcesMediaMostPopularMediaFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=max" }),
        __metadata("design:type", Number)
    ], GetResourcesMediaMostPopularMediaFormatQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=offset" }),
        __metadata("design:type", Number)
    ], GetResourcesMediaMostPopularMediaFormatQueryParams.prototype, "offset", void 0);
    return GetResourcesMediaMostPopularMediaFormatQueryParams;
}(SpeakeasyBase));
export { GetResourcesMediaMostPopularMediaFormatQueryParams };
var GetResourcesMediaMostPopularMediaFormatRequest = /** @class */ (function (_super) {
    __extends(GetResourcesMediaMostPopularMediaFormatRequest, _super);
    function GetResourcesMediaMostPopularMediaFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetResourcesMediaMostPopularMediaFormatPathParams)
    ], GetResourcesMediaMostPopularMediaFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetResourcesMediaMostPopularMediaFormatQueryParams)
    ], GetResourcesMediaMostPopularMediaFormatRequest.prototype, "queryParams", void 0);
    return GetResourcesMediaMostPopularMediaFormatRequest;
}(SpeakeasyBase));
export { GetResourcesMediaMostPopularMediaFormatRequest };
var GetResourcesMediaMostPopularMediaFormatResponse = /** @class */ (function (_super) {
    __extends(GetResourcesMediaMostPopularMediaFormatResponse, _super);
    function GetResourcesMediaMostPopularMediaFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetResourcesMediaMostPopularMediaFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.MediaItemWrapped }),
        __metadata("design:type", Array)
    ], GetResourcesMediaMostPopularMediaFormatResponse.prototype, "mediaItemWrappeds", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetResourcesMediaMostPopularMediaFormatResponse.prototype, "statusCode", void 0);
    return GetResourcesMediaMostPopularMediaFormatResponse;
}(SpeakeasyBase));
export { GetResourcesMediaMostPopularMediaFormatResponse };
