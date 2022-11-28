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
var MoveOrganizationLicensesSeatsPathParams = /** @class */ (function (_super) {
    __extends(MoveOrganizationLicensesSeatsPathParams, _super);
    function MoveOrganizationLicensesSeatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], MoveOrganizationLicensesSeatsPathParams.prototype, "organizationId", void 0);
    return MoveOrganizationLicensesSeatsPathParams;
}(SpeakeasyBase));
export { MoveOrganizationLicensesSeatsPathParams };
var MoveOrganizationLicensesSeatsRequestBody = /** @class */ (function (_super) {
    __extends(MoveOrganizationLicensesSeatsRequestBody, _super);
    function MoveOrganizationLicensesSeatsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destOrganizationId" }),
        __metadata("design:type", String)
    ], MoveOrganizationLicensesSeatsRequestBody.prototype, "destOrganizationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenseId" }),
        __metadata("design:type", String)
    ], MoveOrganizationLicensesSeatsRequestBody.prototype, "licenseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seatCount" }),
        __metadata("design:type", Number)
    ], MoveOrganizationLicensesSeatsRequestBody.prototype, "seatCount", void 0);
    return MoveOrganizationLicensesSeatsRequestBody;
}(SpeakeasyBase));
export { MoveOrganizationLicensesSeatsRequestBody };
var MoveOrganizationLicensesSeatsRequest = /** @class */ (function (_super) {
    __extends(MoveOrganizationLicensesSeatsRequest, _super);
    function MoveOrganizationLicensesSeatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MoveOrganizationLicensesSeatsPathParams)
    ], MoveOrganizationLicensesSeatsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MoveOrganizationLicensesSeatsRequestBody)
    ], MoveOrganizationLicensesSeatsRequest.prototype, "request", void 0);
    return MoveOrganizationLicensesSeatsRequest;
}(SpeakeasyBase));
export { MoveOrganizationLicensesSeatsRequest };
var MoveOrganizationLicensesSeatsResponse = /** @class */ (function (_super) {
    __extends(MoveOrganizationLicensesSeatsResponse, _super);
    function MoveOrganizationLicensesSeatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MoveOrganizationLicensesSeatsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MoveOrganizationLicensesSeatsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], MoveOrganizationLicensesSeatsResponse.prototype, "moveOrganizationLicensesSeats200ApplicationJsonObject", void 0);
    return MoveOrganizationLicensesSeatsResponse;
}(SpeakeasyBase));
export { MoveOrganizationLicensesSeatsResponse };
