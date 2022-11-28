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
var PostSetupV1LocationsIdEmailTemplatesPathParams = /** @class */ (function (_super) {
    __extends(PostSetupV1LocationsIdEmailTemplatesPathParams, _super);
    function PostSetupV1LocationsIdEmailTemplatesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostSetupV1LocationsIdEmailTemplatesPathParams.prototype, "id", void 0);
    return PostSetupV1LocationsIdEmailTemplatesPathParams;
}(SpeakeasyBase));
export { PostSetupV1LocationsIdEmailTemplatesPathParams };
var PostSetupV1LocationsIdEmailTemplatesRequests = /** @class */ (function (_super) {
    __extends(PostSetupV1LocationsIdEmailTemplatesRequests, _super);
    function PostSetupV1LocationsIdEmailTemplatesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", Map)
    ], PostSetupV1LocationsIdEmailTemplatesRequests.prototype, "emailTemplateInputModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], PostSetupV1LocationsIdEmailTemplatesRequests.prototype, "emailTemplateInputModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", Map)
    ], PostSetupV1LocationsIdEmailTemplatesRequests.prototype, "emailTemplateInputModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", Map)
    ], PostSetupV1LocationsIdEmailTemplatesRequests.prototype, "emailTemplateInputModel3", void 0);
    return PostSetupV1LocationsIdEmailTemplatesRequests;
}(SpeakeasyBase));
export { PostSetupV1LocationsIdEmailTemplatesRequests };
var PostSetupV1LocationsIdEmailTemplatesRequest = /** @class */ (function (_super) {
    __extends(PostSetupV1LocationsIdEmailTemplatesRequest, _super);
    function PostSetupV1LocationsIdEmailTemplatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1LocationsIdEmailTemplatesPathParams)
    ], PostSetupV1LocationsIdEmailTemplatesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1LocationsIdEmailTemplatesRequests)
    ], PostSetupV1LocationsIdEmailTemplatesRequest.prototype, "request", void 0);
    return PostSetupV1LocationsIdEmailTemplatesRequest;
}(SpeakeasyBase));
export { PostSetupV1LocationsIdEmailTemplatesRequest };
var PostSetupV1LocationsIdEmailTemplatesResponse = /** @class */ (function (_super) {
    __extends(PostSetupV1LocationsIdEmailTemplatesResponse, _super);
    function PostSetupV1LocationsIdEmailTemplatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ContentResult)
    ], PostSetupV1LocationsIdEmailTemplatesResponse.prototype, "contentResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSetupV1LocationsIdEmailTemplatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSetupV1LocationsIdEmailTemplatesResponse.prototype, "statusCode", void 0);
    return PostSetupV1LocationsIdEmailTemplatesResponse;
}(SpeakeasyBase));
export { PostSetupV1LocationsIdEmailTemplatesResponse };
