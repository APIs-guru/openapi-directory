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
var FirebaseappcheckProjectsServicesBatchUpdatePathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesBatchUpdatePathParams, _super);
    function FirebaseappcheckProjectsServicesBatchUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesBatchUpdatePathParams.prototype, "parent", void 0);
    return FirebaseappcheckProjectsServicesBatchUpdatePathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesBatchUpdatePathParams };
var FirebaseappcheckProjectsServicesBatchUpdateQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesBatchUpdateQueryParams, _super);
    function FirebaseappcheckProjectsServicesBatchUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesBatchUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesBatchUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesBatchUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesBatchUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesBatchUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesBatchUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesBatchUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsServicesBatchUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesBatchUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesBatchUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesBatchUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsServicesBatchUpdateQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesBatchUpdateQueryParams };
var FirebaseappcheckProjectsServicesBatchUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesBatchUpdateSecurityOption1, _super);
    function FirebaseappcheckProjectsServicesBatchUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsServicesBatchUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsServicesBatchUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsServicesBatchUpdateSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesBatchUpdateSecurityOption1 };
var FirebaseappcheckProjectsServicesBatchUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesBatchUpdateSecurityOption2, _super);
    function FirebaseappcheckProjectsServicesBatchUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsServicesBatchUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsServicesBatchUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsServicesBatchUpdateSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesBatchUpdateSecurityOption2 };
var FirebaseappcheckProjectsServicesBatchUpdateSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesBatchUpdateSecurity, _super);
    function FirebaseappcheckProjectsServicesBatchUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsServicesBatchUpdateSecurityOption1)
    ], FirebaseappcheckProjectsServicesBatchUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsServicesBatchUpdateSecurityOption2)
    ], FirebaseappcheckProjectsServicesBatchUpdateSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsServicesBatchUpdateSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesBatchUpdateSecurity };
var FirebaseappcheckProjectsServicesBatchUpdateRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesBatchUpdateRequest, _super);
    function FirebaseappcheckProjectsServicesBatchUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsServicesBatchUpdatePathParams)
    ], FirebaseappcheckProjectsServicesBatchUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsServicesBatchUpdateQueryParams)
    ], FirebaseappcheckProjectsServicesBatchUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1BatchUpdateServicesRequest)
    ], FirebaseappcheckProjectsServicesBatchUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsServicesBatchUpdateSecurity)
    ], FirebaseappcheckProjectsServicesBatchUpdateRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsServicesBatchUpdateRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesBatchUpdateRequest };
var FirebaseappcheckProjectsServicesBatchUpdateResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesBatchUpdateResponse, _super);
    function FirebaseappcheckProjectsServicesBatchUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesBatchUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1BatchUpdateServicesResponse)
    ], FirebaseappcheckProjectsServicesBatchUpdateResponse.prototype, "googleFirebaseAppcheckV1BatchUpdateServicesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsServicesBatchUpdateResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsServicesBatchUpdateResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesBatchUpdateResponse };
