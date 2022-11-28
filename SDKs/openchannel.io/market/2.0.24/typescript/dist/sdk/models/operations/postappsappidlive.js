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
var PostAppsAppIdLivePathParams = /** @class */ (function (_super) {
    __extends(PostAppsAppIdLivePathParams, _super);
    function PostAppsAppIdLivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], PostAppsAppIdLivePathParams.prototype, "appId", void 0);
    return PostAppsAppIdLivePathParams;
}(SpeakeasyBase));
export { PostAppsAppIdLivePathParams };
var PostAppsAppIdLiveQueryParams = /** @class */ (function (_super) {
    __extends(PostAppsAppIdLiveQueryParams, _super);
    function PostAppsAppIdLiveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=developerId" }),
        __metadata("design:type", String)
    ], PostAppsAppIdLiveQueryParams.prototype, "developerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", String)
    ], PostAppsAppIdLiveQueryParams.prototype, "version", void 0);
    return PostAppsAppIdLiveQueryParams;
}(SpeakeasyBase));
export { PostAppsAppIdLiveQueryParams };
var PostAppsAppIdLiveRequest = /** @class */ (function (_super) {
    __extends(PostAppsAppIdLiveRequest, _super);
    function PostAppsAppIdLiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAppsAppIdLivePathParams)
    ], PostAppsAppIdLiveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAppsAppIdLiveQueryParams)
    ], PostAppsAppIdLiveRequest.prototype, "queryParams", void 0);
    return PostAppsAppIdLiveRequest;
}(SpeakeasyBase));
export { PostAppsAppIdLiveRequest };
var PostAppsAppIdLiveResponse = /** @class */ (function (_super) {
    __extends(PostAppsAppIdLiveResponse, _super);
    function PostAppsAppIdLiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAppsAppIdLiveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAppsAppIdLiveResponse.prototype, "statusCode", void 0);
    return PostAppsAppIdLiveResponse;
}(SpeakeasyBase));
export { PostAppsAppIdLiveResponse };
