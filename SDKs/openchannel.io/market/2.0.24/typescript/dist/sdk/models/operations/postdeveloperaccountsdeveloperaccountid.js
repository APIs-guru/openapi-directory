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
var PostDeveloperAccountsDeveloperAccountIdPathParams = /** @class */ (function (_super) {
    __extends(PostDeveloperAccountsDeveloperAccountIdPathParams, _super);
    function PostDeveloperAccountsDeveloperAccountIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=developerAccountId" }),
        __metadata("design:type", String)
    ], PostDeveloperAccountsDeveloperAccountIdPathParams.prototype, "developerAccountId", void 0);
    return PostDeveloperAccountsDeveloperAccountIdPathParams;
}(SpeakeasyBase));
export { PostDeveloperAccountsDeveloperAccountIdPathParams };
var PostDeveloperAccountsDeveloperAccountIdQueryParams = /** @class */ (function (_super) {
    __extends(PostDeveloperAccountsDeveloperAccountIdQueryParams, _super);
    function PostDeveloperAccountsDeveloperAccountIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=customData" }),
        __metadata("design:type", String)
    ], PostDeveloperAccountsDeveloperAccountIdQueryParams.prototype, "customData", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=developerId" }),
        __metadata("design:type", String)
    ], PostDeveloperAccountsDeveloperAccountIdQueryParams.prototype, "developerId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], PostDeveloperAccountsDeveloperAccountIdQueryParams.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], PostDeveloperAccountsDeveloperAccountIdQueryParams.prototype, "name", void 0);
    return PostDeveloperAccountsDeveloperAccountIdQueryParams;
}(SpeakeasyBase));
export { PostDeveloperAccountsDeveloperAccountIdQueryParams };
var PostDeveloperAccountsDeveloperAccountIdRequest = /** @class */ (function (_super) {
    __extends(PostDeveloperAccountsDeveloperAccountIdRequest, _super);
    function PostDeveloperAccountsDeveloperAccountIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeveloperAccountsDeveloperAccountIdPathParams)
    ], PostDeveloperAccountsDeveloperAccountIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeveloperAccountsDeveloperAccountIdQueryParams)
    ], PostDeveloperAccountsDeveloperAccountIdRequest.prototype, "queryParams", void 0);
    return PostDeveloperAccountsDeveloperAccountIdRequest;
}(SpeakeasyBase));
export { PostDeveloperAccountsDeveloperAccountIdRequest };
var PostDeveloperAccountsDeveloperAccountIdResponse = /** @class */ (function (_super) {
    __extends(PostDeveloperAccountsDeveloperAccountIdResponse, _super);
    function PostDeveloperAccountsDeveloperAccountIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeveloperAccountsDeveloperAccountIdResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeveloperAccountsDeveloperAccountIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeveloperAccountsDeveloperAccountIdResponse.prototype, "statusCode", void 0);
    return PostDeveloperAccountsDeveloperAccountIdResponse;
}(SpeakeasyBase));
export { PostDeveloperAccountsDeveloperAccountIdResponse };
