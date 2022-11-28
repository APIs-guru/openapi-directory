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
var FirebaseappcheckProjectsServicesListPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesListPathParams, _super);
    function FirebaseappcheckProjectsServicesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesListPathParams.prototype, "parent", void 0);
    return FirebaseappcheckProjectsServicesListPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesListPathParams };
var FirebaseappcheckProjectsServicesListQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesListQueryParams, _super);
    function FirebaseappcheckProjectsServicesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsServicesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsServicesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsServicesListQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesListQueryParams };
var FirebaseappcheckProjectsServicesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesListSecurityOption1, _super);
    function FirebaseappcheckProjectsServicesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsServicesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsServicesListSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsServicesListSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesListSecurityOption1 };
var FirebaseappcheckProjectsServicesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesListSecurityOption2, _super);
    function FirebaseappcheckProjectsServicesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsServicesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsServicesListSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsServicesListSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesListSecurityOption2 };
var FirebaseappcheckProjectsServicesListSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesListSecurity, _super);
    function FirebaseappcheckProjectsServicesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsServicesListSecurityOption1)
    ], FirebaseappcheckProjectsServicesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsServicesListSecurityOption2)
    ], FirebaseappcheckProjectsServicesListSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsServicesListSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesListSecurity };
var FirebaseappcheckProjectsServicesListRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesListRequest, _super);
    function FirebaseappcheckProjectsServicesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsServicesListPathParams)
    ], FirebaseappcheckProjectsServicesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsServicesListQueryParams)
    ], FirebaseappcheckProjectsServicesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsServicesListSecurity)
    ], FirebaseappcheckProjectsServicesListRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsServicesListRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesListRequest };
var FirebaseappcheckProjectsServicesListResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesListResponse, _super);
    function FirebaseappcheckProjectsServicesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1ListServicesResponse)
    ], FirebaseappcheckProjectsServicesListResponse.prototype, "googleFirebaseAppcheckV1ListServicesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsServicesListResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsServicesListResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesListResponse };
