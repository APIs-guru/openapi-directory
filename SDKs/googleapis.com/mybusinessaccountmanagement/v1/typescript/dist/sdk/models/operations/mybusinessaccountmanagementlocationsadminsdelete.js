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
var MybusinessaccountmanagementLocationsAdminsDeletePathParams = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementLocationsAdminsDeletePathParams, _super);
    function MybusinessaccountmanagementLocationsAdminsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsDeletePathParams.prototype, "name", void 0);
    return MybusinessaccountmanagementLocationsAdminsDeletePathParams;
}(SpeakeasyBase));
export { MybusinessaccountmanagementLocationsAdminsDeletePathParams };
var MybusinessaccountmanagementLocationsAdminsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementLocationsAdminsDeleteQueryParams, _super);
    function MybusinessaccountmanagementLocationsAdminsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessaccountmanagementLocationsAdminsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessaccountmanagementLocationsAdminsDeleteQueryParams;
}(SpeakeasyBase));
export { MybusinessaccountmanagementLocationsAdminsDeleteQueryParams };
var MybusinessaccountmanagementLocationsAdminsDeleteRequest = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementLocationsAdminsDeleteRequest, _super);
    function MybusinessaccountmanagementLocationsAdminsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessaccountmanagementLocationsAdminsDeletePathParams)
    ], MybusinessaccountmanagementLocationsAdminsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessaccountmanagementLocationsAdminsDeleteQueryParams)
    ], MybusinessaccountmanagementLocationsAdminsDeleteRequest.prototype, "queryParams", void 0);
    return MybusinessaccountmanagementLocationsAdminsDeleteRequest;
}(SpeakeasyBase));
export { MybusinessaccountmanagementLocationsAdminsDeleteRequest };
var MybusinessaccountmanagementLocationsAdminsDeleteResponse = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementLocationsAdminsDeleteResponse, _super);
    function MybusinessaccountmanagementLocationsAdminsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], MybusinessaccountmanagementLocationsAdminsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinessaccountmanagementLocationsAdminsDeleteResponse.prototype, "statusCode", void 0);
    return MybusinessaccountmanagementLocationsAdminsDeleteResponse;
}(SpeakeasyBase));
export { MybusinessaccountmanagementLocationsAdminsDeleteResponse };
