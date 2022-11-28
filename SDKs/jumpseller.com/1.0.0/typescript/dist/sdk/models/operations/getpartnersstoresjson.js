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
var GetPartnersStoresJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetPartnersStoresJsonQueryParams, _super);
    function GetPartnersStoresJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auth_token" }),
        __metadata("design:type", String)
    ], GetPartnersStoresJsonQueryParams.prototype, "authToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], GetPartnersStoresJsonQueryParams.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPartnersStoresJsonQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_code" }),
        __metadata("design:type", String)
    ], GetPartnersStoresJsonQueryParams.prototype, "partnerCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", String)
    ], GetPartnersStoresJsonQueryParams.prototype, "to", void 0);
    return GetPartnersStoresJsonQueryParams;
}(SpeakeasyBase));
export { GetPartnersStoresJsonQueryParams };
var GetPartnersStoresJsonRequest = /** @class */ (function (_super) {
    __extends(GetPartnersStoresJsonRequest, _super);
    function GetPartnersStoresJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPartnersStoresJsonQueryParams)
    ], GetPartnersStoresJsonRequest.prototype, "queryParams", void 0);
    return GetPartnersStoresJsonRequest;
}(SpeakeasyBase));
export { GetPartnersStoresJsonRequest };
var GetPartnersStoresJsonResponse = /** @class */ (function (_super) {
    __extends(GetPartnersStoresJsonResponse, _super);
    function GetPartnersStoresJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPartnersStoresJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartnerError)
    ], GetPartnersStoresJsonResponse.prototype, "partnerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPartnersStoresJsonResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Type }),
        __metadata("design:type", Array)
    ], GetPartnersStoresJsonResponse.prototype, "types", void 0);
    return GetPartnersStoresJsonResponse;
}(SpeakeasyBase));
export { GetPartnersStoresJsonResponse };
