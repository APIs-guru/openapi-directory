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
var PostAppsAppIdVersionsVersionStatusPathParams = /** @class */ (function (_super) {
    __extends(PostAppsAppIdVersionsVersionStatusPathParams, _super);
    function PostAppsAppIdVersionsVersionStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionStatusPathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", Number)
    ], PostAppsAppIdVersionsVersionStatusPathParams.prototype, "version", void 0);
    return PostAppsAppIdVersionsVersionStatusPathParams;
}(SpeakeasyBase));
export { PostAppsAppIdVersionsVersionStatusPathParams };
export var PostAppsAppIdVersionsVersionStatusModifiedByEnum;
(function (PostAppsAppIdVersionsVersionStatusModifiedByEnum) {
    PostAppsAppIdVersionsVersionStatusModifiedByEnum["Developer"] = "developer";
    PostAppsAppIdVersionsVersionStatusModifiedByEnum["Administrator"] = "administrator";
})(PostAppsAppIdVersionsVersionStatusModifiedByEnum || (PostAppsAppIdVersionsVersionStatusModifiedByEnum = {}));
export var PostAppsAppIdVersionsVersionStatusStatusEnum;
(function (PostAppsAppIdVersionsVersionStatusStatusEnum) {
    PostAppsAppIdVersionsVersionStatusStatusEnum["InReview"] = "inReview";
    PostAppsAppIdVersionsVersionStatusStatusEnum["Approved"] = "approved";
    PostAppsAppIdVersionsVersionStatusStatusEnum["Suspended"] = "suspended";
    PostAppsAppIdVersionsVersionStatusStatusEnum["Rejected"] = "rejected";
})(PostAppsAppIdVersionsVersionStatusStatusEnum || (PostAppsAppIdVersionsVersionStatusStatusEnum = {}));
var PostAppsAppIdVersionsVersionStatusQueryParams = /** @class */ (function (_super) {
    __extends(PostAppsAppIdVersionsVersionStatusQueryParams, _super);
    function PostAppsAppIdVersionsVersionStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=developerId" }),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionStatusQueryParams.prototype, "developerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modifiedBy" }),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionStatusQueryParams.prototype, "modifiedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reason" }),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionStatusQueryParams.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionStatusQueryParams.prototype, "status", void 0);
    return PostAppsAppIdVersionsVersionStatusQueryParams;
}(SpeakeasyBase));
export { PostAppsAppIdVersionsVersionStatusQueryParams };
var PostAppsAppIdVersionsVersionStatusRequest = /** @class */ (function (_super) {
    __extends(PostAppsAppIdVersionsVersionStatusRequest, _super);
    function PostAppsAppIdVersionsVersionStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAppsAppIdVersionsVersionStatusPathParams)
    ], PostAppsAppIdVersionsVersionStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAppsAppIdVersionsVersionStatusQueryParams)
    ], PostAppsAppIdVersionsVersionStatusRequest.prototype, "queryParams", void 0);
    return PostAppsAppIdVersionsVersionStatusRequest;
}(SpeakeasyBase));
export { PostAppsAppIdVersionsVersionStatusRequest };
var PostAppsAppIdVersionsVersionStatusResponse = /** @class */ (function (_super) {
    __extends(PostAppsAppIdVersionsVersionStatusResponse, _super);
    function PostAppsAppIdVersionsVersionStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAppsAppIdVersionsVersionStatusResponse.prototype, "statusCode", void 0);
    return PostAppsAppIdVersionsVersionStatusResponse;
}(SpeakeasyBase));
export { PostAppsAppIdVersionsVersionStatusResponse };
