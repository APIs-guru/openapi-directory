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
var MybusinessAccountsLocationsVerificationsCompletePathParams = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsVerificationsCompletePathParams, _super);
    function MybusinessAccountsLocationsVerificationsCompletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsVerificationsCompletePathParams.prototype, "name", void 0);
    return MybusinessAccountsLocationsVerificationsCompletePathParams;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsVerificationsCompletePathParams };
var MybusinessAccountsLocationsVerificationsCompleteQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsVerificationsCompleteQueryParams, _super);
    function MybusinessAccountsLocationsVerificationsCompleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsVerificationsCompleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsVerificationsCompleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsVerificationsCompleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsVerificationsCompleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsVerificationsCompleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsVerificationsCompleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsVerificationsCompleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessAccountsLocationsVerificationsCompleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsVerificationsCompleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsVerificationsCompleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsVerificationsCompleteQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessAccountsLocationsVerificationsCompleteQueryParams;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsVerificationsCompleteQueryParams };
var MybusinessAccountsLocationsVerificationsCompleteRequest = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsVerificationsCompleteRequest, _super);
    function MybusinessAccountsLocationsVerificationsCompleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessAccountsLocationsVerificationsCompletePathParams)
    ], MybusinessAccountsLocationsVerificationsCompleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessAccountsLocationsVerificationsCompleteQueryParams)
    ], MybusinessAccountsLocationsVerificationsCompleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CompleteVerificationRequest)
    ], MybusinessAccountsLocationsVerificationsCompleteRequest.prototype, "request", void 0);
    return MybusinessAccountsLocationsVerificationsCompleteRequest;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsVerificationsCompleteRequest };
var MybusinessAccountsLocationsVerificationsCompleteResponse = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsVerificationsCompleteResponse, _super);
    function MybusinessAccountsLocationsVerificationsCompleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CompleteVerificationResponse)
    ], MybusinessAccountsLocationsVerificationsCompleteResponse.prototype, "completeVerificationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsVerificationsCompleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinessAccountsLocationsVerificationsCompleteResponse.prototype, "statusCode", void 0);
    return MybusinessAccountsLocationsVerificationsCompleteResponse;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsVerificationsCompleteResponse };
