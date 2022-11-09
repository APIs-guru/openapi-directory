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
var PostAppsQueryParams = /** @class */ (function (_super) {
    __extends(PostAppsQueryParams, _super);
    function PostAppsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access" }),
        __metadata("design:type", String)
    ], PostAppsQueryParams.prototype, "access", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=allow" }),
        __metadata("design:type", String)
    ], PostAppsQueryParams.prototype, "allow", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=attributes" }),
        __metadata("design:type", String)
    ], PostAppsQueryParams.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=customData" }),
        __metadata("design:type", String)
    ], PostAppsQueryParams.prototype, "customData", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=developerId" }),
        __metadata("design:type", String)
    ], PostAppsQueryParams.prototype, "developerId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], PostAppsQueryParams.prototype, "model", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], PostAppsQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=restrict" }),
        __metadata("design:type", String)
    ], PostAppsQueryParams.prototype, "restrict", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], PostAppsQueryParams.prototype, "type", void 0);
    return PostAppsQueryParams;
}(SpeakeasyBase));
export { PostAppsQueryParams };
var PostAppsRequest = /** @class */ (function (_super) {
    __extends(PostAppsRequest, _super);
    function PostAppsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostAppsQueryParams)
    ], PostAppsRequest.prototype, "queryParams", void 0);
    return PostAppsRequest;
}(SpeakeasyBase));
export { PostAppsRequest };
var PostAppsResponse = /** @class */ (function (_super) {
    __extends(PostAppsResponse, _super);
    function PostAppsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostAppsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostAppsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostAppsResponse.prototype, "statusCode", void 0);
    return PostAppsResponse;
}(SpeakeasyBase));
export { PostAppsResponse };
