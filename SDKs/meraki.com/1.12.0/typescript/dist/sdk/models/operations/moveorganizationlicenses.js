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
var MoveOrganizationLicensesPathParams = /** @class */ (function (_super) {
    __extends(MoveOrganizationLicensesPathParams, _super);
    function MoveOrganizationLicensesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], MoveOrganizationLicensesPathParams.prototype, "organizationId", void 0);
    return MoveOrganizationLicensesPathParams;
}(SpeakeasyBase));
export { MoveOrganizationLicensesPathParams };
var MoveOrganizationLicensesRequestBody = /** @class */ (function (_super) {
    __extends(MoveOrganizationLicensesRequestBody, _super);
    function MoveOrganizationLicensesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destOrganizationId" }),
        __metadata("design:type", String)
    ], MoveOrganizationLicensesRequestBody.prototype, "destOrganizationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenseIds" }),
        __metadata("design:type", Array)
    ], MoveOrganizationLicensesRequestBody.prototype, "licenseIds", void 0);
    return MoveOrganizationLicensesRequestBody;
}(SpeakeasyBase));
export { MoveOrganizationLicensesRequestBody };
var MoveOrganizationLicensesRequest = /** @class */ (function (_super) {
    __extends(MoveOrganizationLicensesRequest, _super);
    function MoveOrganizationLicensesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MoveOrganizationLicensesPathParams)
    ], MoveOrganizationLicensesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MoveOrganizationLicensesRequestBody)
    ], MoveOrganizationLicensesRequest.prototype, "request", void 0);
    return MoveOrganizationLicensesRequest;
}(SpeakeasyBase));
export { MoveOrganizationLicensesRequest };
var MoveOrganizationLicensesResponse = /** @class */ (function (_super) {
    __extends(MoveOrganizationLicensesResponse, _super);
    function MoveOrganizationLicensesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MoveOrganizationLicensesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MoveOrganizationLicensesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], MoveOrganizationLicensesResponse.prototype, "moveOrganizationLicenses200ApplicationJsonObject", void 0);
    return MoveOrganizationLicensesResponse;
}(SpeakeasyBase));
export { MoveOrganizationLicensesResponse };
