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
var DeletePagesIdJsonPathParams = /** @class */ (function (_super) {
    __extends(DeletePagesIdJsonPathParams, _super);
    function DeletePagesIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DeletePagesIdJsonPathParams.prototype, "id", void 0);
    return DeletePagesIdJsonPathParams;
}(SpeakeasyBase));
export { DeletePagesIdJsonPathParams };
var DeletePagesIdJsonQueryParams = /** @class */ (function (_super) {
    __extends(DeletePagesIdJsonQueryParams, _super);
    function DeletePagesIdJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], DeletePagesIdJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], DeletePagesIdJsonQueryParams.prototype, "login", void 0);
    return DeletePagesIdJsonQueryParams;
}(SpeakeasyBase));
export { DeletePagesIdJsonQueryParams };
var DeletePagesIdJsonRequest = /** @class */ (function (_super) {
    __extends(DeletePagesIdJsonRequest, _super);
    function DeletePagesIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePagesIdJsonPathParams)
    ], DeletePagesIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePagesIdJsonQueryParams)
    ], DeletePagesIdJsonRequest.prototype, "queryParams", void 0);
    return DeletePagesIdJsonRequest;
}(SpeakeasyBase));
export { DeletePagesIdJsonRequest };
var DeletePagesIdJsonResponse = /** @class */ (function (_super) {
    __extends(DeletePagesIdJsonResponse, _super);
    function DeletePagesIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletePagesIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletePagesIdJsonResponse.prototype, "deletePagesIdJson200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeletePagesIdJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeletePagesIdJsonResponse.prototype, "statusCode", void 0);
    return DeletePagesIdJsonResponse;
}(SpeakeasyBase));
export { DeletePagesIdJsonResponse };
