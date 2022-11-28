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
var PostAppsAppIdVersionsVersionPathParams = /** @class */ (function (_super) {
    __extends(PostAppsAppIdVersionsVersionPathParams, _super);
    function PostAppsAppIdVersionsVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionPathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionPathParams.prototype, "version", void 0);
    return PostAppsAppIdVersionsVersionPathParams;
}(SpeakeasyBase));
export { PostAppsAppIdVersionsVersionPathParams };
var PostAppsAppIdVersionsVersionQueryParams = /** @class */ (function (_super) {
    __extends(PostAppsAppIdVersionsVersionQueryParams, _super);
    function PostAppsAppIdVersionsVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access" }),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionQueryParams.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allow" }),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionQueryParams.prototype, "allow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=approvalRequired" }),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionQueryParams.prototype, "approvalRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=attributes" }),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionQueryParams.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" }),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionQueryParams.prototype, "customData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=developerId" }),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionQueryParams.prototype, "developerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=restrict" }),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionQueryParams.prototype, "restrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionQueryParams.prototype, "type", void 0);
    return PostAppsAppIdVersionsVersionQueryParams;
}(SpeakeasyBase));
export { PostAppsAppIdVersionsVersionQueryParams };
var PostAppsAppIdVersionsVersionRequest = /** @class */ (function (_super) {
    __extends(PostAppsAppIdVersionsVersionRequest, _super);
    function PostAppsAppIdVersionsVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAppsAppIdVersionsVersionPathParams)
    ], PostAppsAppIdVersionsVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAppsAppIdVersionsVersionQueryParams)
    ], PostAppsAppIdVersionsVersionRequest.prototype, "queryParams", void 0);
    return PostAppsAppIdVersionsVersionRequest;
}(SpeakeasyBase));
export { PostAppsAppIdVersionsVersionRequest };
var PostAppsAppIdVersionsVersionResponse = /** @class */ (function (_super) {
    __extends(PostAppsAppIdVersionsVersionResponse, _super);
    function PostAppsAppIdVersionsVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAppsAppIdVersionsVersionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAppsAppIdVersionsVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAppsAppIdVersionsVersionResponse.prototype, "statusCode", void 0);
    return PostAppsAppIdVersionsVersionResponse;
}(SpeakeasyBase));
export { PostAppsAppIdVersionsVersionResponse };
