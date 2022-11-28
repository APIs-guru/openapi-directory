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
var GetFulfillmentsIdJsonPathParams = /** @class */ (function (_super) {
    __extends(GetFulfillmentsIdJsonPathParams, _super);
    function GetFulfillmentsIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetFulfillmentsIdJsonPathParams.prototype, "id", void 0);
    return GetFulfillmentsIdJsonPathParams;
}(SpeakeasyBase));
export { GetFulfillmentsIdJsonPathParams };
var GetFulfillmentsIdJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetFulfillmentsIdJsonQueryParams, _super);
    function GetFulfillmentsIdJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], GetFulfillmentsIdJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], GetFulfillmentsIdJsonQueryParams.prototype, "login", void 0);
    return GetFulfillmentsIdJsonQueryParams;
}(SpeakeasyBase));
export { GetFulfillmentsIdJsonQueryParams };
var GetFulfillmentsIdJsonRequest = /** @class */ (function (_super) {
    __extends(GetFulfillmentsIdJsonRequest, _super);
    function GetFulfillmentsIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFulfillmentsIdJsonPathParams)
    ], GetFulfillmentsIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFulfillmentsIdJsonQueryParams)
    ], GetFulfillmentsIdJsonRequest.prototype, "queryParams", void 0);
    return GetFulfillmentsIdJsonRequest;
}(SpeakeasyBase));
export { GetFulfillmentsIdJsonRequest };
var GetFulfillmentsIdJsonResponse = /** @class */ (function (_super) {
    __extends(GetFulfillmentsIdJsonResponse, _super);
    function GetFulfillmentsIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFulfillmentsIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Fulfillment)
    ], GetFulfillmentsIdJsonResponse.prototype, "fulfillment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFulfillmentsIdJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFulfillmentsIdJsonResponse.prototype, "statusCode", void 0);
    return GetFulfillmentsIdJsonResponse;
}(SpeakeasyBase));
export { GetFulfillmentsIdJsonResponse };
