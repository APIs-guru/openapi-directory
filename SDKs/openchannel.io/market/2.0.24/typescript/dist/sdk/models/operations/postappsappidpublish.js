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
var PostAppsAppIdPublishPathParams = /** @class */ (function (_super) {
    __extends(PostAppsAppIdPublishPathParams, _super);
    function PostAppsAppIdPublishPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], PostAppsAppIdPublishPathParams.prototype, "appId", void 0);
    return PostAppsAppIdPublishPathParams;
}(SpeakeasyBase));
export { PostAppsAppIdPublishPathParams };
var PostAppsAppIdPublishQueryParams = /** @class */ (function (_super) {
    __extends(PostAppsAppIdPublishQueryParams, _super);
    function PostAppsAppIdPublishQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=autoApprove" }),
        __metadata("design:type", Boolean)
    ], PostAppsAppIdPublishQueryParams.prototype, "autoApprove", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=developerId" }),
        __metadata("design:type", String)
    ], PostAppsAppIdPublishQueryParams.prototype, "developerId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", Number)
    ], PostAppsAppIdPublishQueryParams.prototype, "version", void 0);
    return PostAppsAppIdPublishQueryParams;
}(SpeakeasyBase));
export { PostAppsAppIdPublishQueryParams };
var PostAppsAppIdPublishRequest = /** @class */ (function (_super) {
    __extends(PostAppsAppIdPublishRequest, _super);
    function PostAppsAppIdPublishRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostAppsAppIdPublishPathParams)
    ], PostAppsAppIdPublishRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostAppsAppIdPublishQueryParams)
    ], PostAppsAppIdPublishRequest.prototype, "queryParams", void 0);
    return PostAppsAppIdPublishRequest;
}(SpeakeasyBase));
export { PostAppsAppIdPublishRequest };
var PostAppsAppIdPublishResponse = /** @class */ (function (_super) {
    __extends(PostAppsAppIdPublishResponse, _super);
    function PostAppsAppIdPublishResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostAppsAppIdPublishResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostAppsAppIdPublishResponse.prototype, "statusCode", void 0);
    return PostAppsAppIdPublishResponse;
}(SpeakeasyBase));
export { PostAppsAppIdPublishResponse };
