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
var PostRequestIdPathParams = /** @class */ (function (_super) {
    __extends(PostRequestIdPathParams, _super);
    function PostRequestIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostRequestIdPathParams.prototype, "id", void 0);
    return PostRequestIdPathParams;
}(SpeakeasyBase));
export { PostRequestIdPathParams };
var PostRequestIdQueryParams = /** @class */ (function (_super) {
    __extends(PostRequestIdQueryParams, _super);
    function PostRequestIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=by_group" }),
        __metadata("design:type", String)
    ], PostRequestIdQueryParams.prototype, "byGroup", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=by_package" }),
        __metadata("design:type", String)
    ], PostRequestIdQueryParams.prototype, "byPackage", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=by_project" }),
        __metadata("design:type", String)
    ], PostRequestIdQueryParams.prototype, "byProject", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=by_user" }),
        __metadata("design:type", String)
    ], PostRequestIdQueryParams.prototype, "byUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=cmd" }),
        __metadata("design:type", String)
    ], PostRequestIdQueryParams.prototype, "cmd", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=comment" }),
        __metadata("design:type", String)
    ], PostRequestIdQueryParams.prototype, "comment", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=incident" }),
        __metadata("design:type", String)
    ], PostRequestIdQueryParams.prototype, "incident", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=newstate" }),
        __metadata("design:type", String)
    ], PostRequestIdQueryParams.prototype, "newstate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=priority" }),
        __metadata("design:type", String)
    ], PostRequestIdQueryParams.prototype, "priority", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", String)
    ], PostRequestIdQueryParams.prototype, "time", void 0);
    return PostRequestIdQueryParams;
}(SpeakeasyBase));
export { PostRequestIdQueryParams };
var PostRequestIdSecurity = /** @class */ (function (_super) {
    __extends(PostRequestIdSecurity, _super);
    function PostRequestIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], PostRequestIdSecurity.prototype, "basicAuthentication", void 0);
    return PostRequestIdSecurity;
}(SpeakeasyBase));
export { PostRequestIdSecurity };
var PostRequestIdRequest = /** @class */ (function (_super) {
    __extends(PostRequestIdRequest, _super);
    function PostRequestIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostRequestIdPathParams)
    ], PostRequestIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostRequestIdQueryParams)
    ], PostRequestIdRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostRequestIdSecurity)
    ], PostRequestIdRequest.prototype, "security", void 0);
    return PostRequestIdRequest;
}(SpeakeasyBase));
export { PostRequestIdRequest };
var PostRequestIdResponse = /** @class */ (function (_super) {
    __extends(PostRequestIdResponse, _super);
    function PostRequestIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostRequestIdResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostRequestIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostRequestIdResponse.prototype, "statusCode", void 0);
    return PostRequestIdResponse;
}(SpeakeasyBase));
export { PostRequestIdResponse };
