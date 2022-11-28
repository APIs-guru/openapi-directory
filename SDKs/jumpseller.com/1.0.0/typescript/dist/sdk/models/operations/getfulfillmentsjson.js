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
var GetFulfillmentsJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetFulfillmentsJsonQueryParams, _super);
    function GetFulfillmentsJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], GetFulfillmentsJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetFulfillmentsJsonQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], GetFulfillmentsJsonQueryParams.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetFulfillmentsJsonQueryParams.prototype, "page", void 0);
    return GetFulfillmentsJsonQueryParams;
}(SpeakeasyBase));
export { GetFulfillmentsJsonQueryParams };
var GetFulfillmentsJsonRequest = /** @class */ (function (_super) {
    __extends(GetFulfillmentsJsonRequest, _super);
    function GetFulfillmentsJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFulfillmentsJsonQueryParams)
    ], GetFulfillmentsJsonRequest.prototype, "queryParams", void 0);
    return GetFulfillmentsJsonRequest;
}(SpeakeasyBase));
export { GetFulfillmentsJsonRequest };
var GetFulfillmentsJsonResponse = /** @class */ (function (_super) {
    __extends(GetFulfillmentsJsonResponse, _super);
    function GetFulfillmentsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFulfillmentsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Fulfillment }),
        __metadata("design:type", Array)
    ], GetFulfillmentsJsonResponse.prototype, "fulfillments", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFulfillmentsJsonResponse.prototype, "statusCode", void 0);
    return GetFulfillmentsJsonResponse;
}(SpeakeasyBase));
export { GetFulfillmentsJsonResponse };
