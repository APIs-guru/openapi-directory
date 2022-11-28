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
var PostPathParams = /** @class */ (function (_super) {
    __extends(PostPathParams, _super);
    function PostPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], PostPathParams.prototype, "itemId", void 0);
    return PostPathParams;
}(SpeakeasyBase));
export { PostPathParams };
var PostQueryParams = /** @class */ (function (_super) {
    __extends(PostQueryParams, _super);
    function PostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageRefreshMode" }),
        __metadata("design:type", String)
    ], PostQueryParams.prototype, "imageRefreshMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metadataRefreshMode" }),
        __metadata("design:type", String)
    ], PostQueryParams.prototype, "metadataRefreshMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=replaceAllImages" }),
        __metadata("design:type", Boolean)
    ], PostQueryParams.prototype, "replaceAllImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=replaceAllMetadata" }),
        __metadata("design:type", Boolean)
    ], PostQueryParams.prototype, "replaceAllMetadata", void 0);
    return PostQueryParams;
}(SpeakeasyBase));
export { PostQueryParams };
var PostSecurity = /** @class */ (function (_super) {
    __extends(PostSecurity, _super);
    function PostSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], PostSecurity.prototype, "customAuthentication", void 0);
    return PostSecurity;
}(SpeakeasyBase));
export { PostSecurity };
var PostRequest = /** @class */ (function (_super) {
    __extends(PostRequest, _super);
    function PostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPathParams)
    ], PostRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostQueryParams)
    ], PostRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSecurity)
    ], PostRequest.prototype, "security", void 0);
    return PostRequest;
}(SpeakeasyBase));
export { PostRequest };
var PostResponse = /** @class */ (function (_super) {
    __extends(PostResponse, _super);
    function PostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostResponse.prototype, "statusCode", void 0);
    return PostResponse;
}(SpeakeasyBase));
export { PostResponse };
