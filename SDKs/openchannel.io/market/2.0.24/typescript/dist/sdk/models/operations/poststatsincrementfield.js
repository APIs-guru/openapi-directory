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
var PostStatsIncrementFieldPathParams = /** @class */ (function (_super) {
    __extends(PostStatsIncrementFieldPathParams, _super);
    function PostStatsIncrementFieldPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=field" }),
        __metadata("design:type", String)
    ], PostStatsIncrementFieldPathParams.prototype, "field", void 0);
    return PostStatsIncrementFieldPathParams;
}(SpeakeasyBase));
export { PostStatsIncrementFieldPathParams };
var PostStatsIncrementFieldQueryParams = /** @class */ (function (_super) {
    __extends(PostStatsIncrementFieldQueryParams, _super);
    function PostStatsIncrementFieldQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=appId" }),
        __metadata("design:type", String)
    ], PostStatsIncrementFieldQueryParams.prototype, "appId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", Number)
    ], PostStatsIncrementFieldQueryParams.prototype, "date", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], PostStatsIncrementFieldQueryParams.prototype, "userId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=value" }),
        __metadata("design:type", Number)
    ], PostStatsIncrementFieldQueryParams.prototype, "value", void 0);
    return PostStatsIncrementFieldQueryParams;
}(SpeakeasyBase));
export { PostStatsIncrementFieldQueryParams };
var PostStatsIncrementFieldRequest = /** @class */ (function (_super) {
    __extends(PostStatsIncrementFieldRequest, _super);
    function PostStatsIncrementFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostStatsIncrementFieldPathParams)
    ], PostStatsIncrementFieldRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostStatsIncrementFieldQueryParams)
    ], PostStatsIncrementFieldRequest.prototype, "queryParams", void 0);
    return PostStatsIncrementFieldRequest;
}(SpeakeasyBase));
export { PostStatsIncrementFieldRequest };
var PostStatsIncrementFieldResponse = /** @class */ (function (_super) {
    __extends(PostStatsIncrementFieldResponse, _super);
    function PostStatsIncrementFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostStatsIncrementFieldResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostStatsIncrementFieldResponse.prototype, "statusCode", void 0);
    return PostStatsIncrementFieldResponse;
}(SpeakeasyBase));
export { PostStatsIncrementFieldResponse };
