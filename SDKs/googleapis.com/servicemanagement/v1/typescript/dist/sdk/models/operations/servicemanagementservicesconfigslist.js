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
var ServicemanagementServicesConfigsListPathParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsListPathParams, _super);
    function ServicemanagementServicesConfigsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceName" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsListPathParams.prototype, "serviceName", void 0);
    return ServicemanagementServicesConfigsListPathParams;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsListPathParams };
var ServicemanagementServicesConfigsListQueryParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsListQueryParams, _super);
    function ServicemanagementServicesConfigsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ServicemanagementServicesConfigsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicemanagementServicesConfigsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsListQueryParams.prototype, "uploadProtocol", void 0);
    return ServicemanagementServicesConfigsListQueryParams;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsListQueryParams };
var ServicemanagementServicesConfigsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsListSecurityOption1, _super);
    function ServicemanagementServicesConfigsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConfigsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConfigsListSecurityOption1.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConfigsListSecurityOption1;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsListSecurityOption1 };
var ServicemanagementServicesConfigsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsListSecurityOption2, _super);
    function ServicemanagementServicesConfigsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConfigsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConfigsListSecurityOption2.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConfigsListSecurityOption2;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsListSecurityOption2 };
var ServicemanagementServicesConfigsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsListSecurityOption3, _super);
    function ServicemanagementServicesConfigsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConfigsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConfigsListSecurityOption3.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConfigsListSecurityOption3;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsListSecurityOption3 };
var ServicemanagementServicesConfigsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsListSecurityOption4, _super);
    function ServicemanagementServicesConfigsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConfigsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConfigsListSecurityOption4.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConfigsListSecurityOption4;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsListSecurityOption4 };
var ServicemanagementServicesConfigsListSecurity = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsListSecurity, _super);
    function ServicemanagementServicesConfigsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConfigsListSecurityOption1)
    ], ServicemanagementServicesConfigsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConfigsListSecurityOption2)
    ], ServicemanagementServicesConfigsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConfigsListSecurityOption3)
    ], ServicemanagementServicesConfigsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConfigsListSecurityOption4)
    ], ServicemanagementServicesConfigsListSecurity.prototype, "option4", void 0);
    return ServicemanagementServicesConfigsListSecurity;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsListSecurity };
var ServicemanagementServicesConfigsListRequest = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsListRequest, _super);
    function ServicemanagementServicesConfigsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConfigsListPathParams)
    ], ServicemanagementServicesConfigsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConfigsListQueryParams)
    ], ServicemanagementServicesConfigsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConfigsListSecurity)
    ], ServicemanagementServicesConfigsListRequest.prototype, "security", void 0);
    return ServicemanagementServicesConfigsListRequest;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsListRequest };
var ServicemanagementServicesConfigsListResponse = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsListResponse, _super);
    function ServicemanagementServicesConfigsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListServiceConfigsResponse)
    ], ServicemanagementServicesConfigsListResponse.prototype, "listServiceConfigsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicemanagementServicesConfigsListResponse.prototype, "statusCode", void 0);
    return ServicemanagementServicesConfigsListResponse;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsListResponse };
