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
var PostCustomersIdFieldsPathParams = /** @class */ (function (_super) {
    __extends(PostCustomersIdFieldsPathParams, _super);
    function PostCustomersIdFieldsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostCustomersIdFieldsPathParams.prototype, "id", void 0);
    return PostCustomersIdFieldsPathParams;
}(SpeakeasyBase));
export { PostCustomersIdFieldsPathParams };
var PostCustomersIdFieldsQueryParams = /** @class */ (function (_super) {
    __extends(PostCustomersIdFieldsQueryParams, _super);
    function PostCustomersIdFieldsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], PostCustomersIdFieldsQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], PostCustomersIdFieldsQueryParams.prototype, "login", void 0);
    return PostCustomersIdFieldsQueryParams;
}(SpeakeasyBase));
export { PostCustomersIdFieldsQueryParams };
var PostCustomersIdFieldsRequest = /** @class */ (function (_super) {
    __extends(PostCustomersIdFieldsRequest, _super);
    function PostCustomersIdFieldsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCustomersIdFieldsPathParams)
    ], PostCustomersIdFieldsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCustomersIdFieldsQueryParams)
    ], PostCustomersIdFieldsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomerAdditionalFieldEdit)
    ], PostCustomersIdFieldsRequest.prototype, "request", void 0);
    return PostCustomersIdFieldsRequest;
}(SpeakeasyBase));
export { PostCustomersIdFieldsRequest };
var PostCustomersIdFieldsResponse = /** @class */ (function (_super) {
    __extends(PostCustomersIdFieldsResponse, _super);
    function PostCustomersIdFieldsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCustomersIdFieldsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomerAdditionalField)
    ], PostCustomersIdFieldsResponse.prototype, "customerAdditionalField", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostCustomersIdFieldsResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCustomersIdFieldsResponse.prototype, "statusCode", void 0);
    return PostCustomersIdFieldsResponse;
}(SpeakeasyBase));
export { PostCustomersIdFieldsResponse };
