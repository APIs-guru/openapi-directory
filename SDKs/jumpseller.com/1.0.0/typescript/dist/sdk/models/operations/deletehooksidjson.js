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
var DeleteHooksIdJsonPathParams = /** @class */ (function (_super) {
    __extends(DeleteHooksIdJsonPathParams, _super);
    function DeleteHooksIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DeleteHooksIdJsonPathParams.prototype, "id", void 0);
    return DeleteHooksIdJsonPathParams;
}(SpeakeasyBase));
export { DeleteHooksIdJsonPathParams };
var DeleteHooksIdJsonQueryParams = /** @class */ (function (_super) {
    __extends(DeleteHooksIdJsonQueryParams, _super);
    function DeleteHooksIdJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], DeleteHooksIdJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], DeleteHooksIdJsonQueryParams.prototype, "login", void 0);
    return DeleteHooksIdJsonQueryParams;
}(SpeakeasyBase));
export { DeleteHooksIdJsonQueryParams };
var DeleteHooksIdJsonRequest = /** @class */ (function (_super) {
    __extends(DeleteHooksIdJsonRequest, _super);
    function DeleteHooksIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteHooksIdJsonPathParams)
    ], DeleteHooksIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteHooksIdJsonQueryParams)
    ], DeleteHooksIdJsonRequest.prototype, "queryParams", void 0);
    return DeleteHooksIdJsonRequest;
}(SpeakeasyBase));
export { DeleteHooksIdJsonRequest };
var DeleteHooksIdJsonResponse = /** @class */ (function (_super) {
    __extends(DeleteHooksIdJsonResponse, _super);
    function DeleteHooksIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteHooksIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteHooksIdJsonResponse.prototype, "deleteHooksIdJson200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteHooksIdJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteHooksIdJsonResponse.prototype, "statusCode", void 0);
    return DeleteHooksIdJsonResponse;
}(SpeakeasyBase));
export { DeleteHooksIdJsonResponse };
