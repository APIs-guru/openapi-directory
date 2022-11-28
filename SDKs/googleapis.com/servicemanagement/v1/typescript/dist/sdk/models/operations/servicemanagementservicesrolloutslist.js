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
var ServicemanagementServicesRolloutsListPathParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsListPathParams, _super);
    function ServicemanagementServicesRolloutsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceName" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsListPathParams.prototype, "serviceName", void 0);
    return ServicemanagementServicesRolloutsListPathParams;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsListPathParams };
var ServicemanagementServicesRolloutsListQueryParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsListQueryParams, _super);
    function ServicemanagementServicesRolloutsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ServicemanagementServicesRolloutsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicemanagementServicesRolloutsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsListQueryParams.prototype, "uploadProtocol", void 0);
    return ServicemanagementServicesRolloutsListQueryParams;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsListQueryParams };
var ServicemanagementServicesRolloutsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsListSecurityOption1, _super);
    function ServicemanagementServicesRolloutsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesRolloutsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesRolloutsListSecurityOption1.prototype, "oauth2c", void 0);
    return ServicemanagementServicesRolloutsListSecurityOption1;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsListSecurityOption1 };
var ServicemanagementServicesRolloutsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsListSecurityOption2, _super);
    function ServicemanagementServicesRolloutsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesRolloutsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesRolloutsListSecurityOption2.prototype, "oauth2c", void 0);
    return ServicemanagementServicesRolloutsListSecurityOption2;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsListSecurityOption2 };
var ServicemanagementServicesRolloutsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsListSecurityOption3, _super);
    function ServicemanagementServicesRolloutsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesRolloutsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesRolloutsListSecurityOption3.prototype, "oauth2c", void 0);
    return ServicemanagementServicesRolloutsListSecurityOption3;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsListSecurityOption3 };
var ServicemanagementServicesRolloutsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsListSecurityOption4, _super);
    function ServicemanagementServicesRolloutsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesRolloutsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesRolloutsListSecurityOption4.prototype, "oauth2c", void 0);
    return ServicemanagementServicesRolloutsListSecurityOption4;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsListSecurityOption4 };
var ServicemanagementServicesRolloutsListSecurity = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsListSecurity, _super);
    function ServicemanagementServicesRolloutsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesRolloutsListSecurityOption1)
    ], ServicemanagementServicesRolloutsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesRolloutsListSecurityOption2)
    ], ServicemanagementServicesRolloutsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesRolloutsListSecurityOption3)
    ], ServicemanagementServicesRolloutsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesRolloutsListSecurityOption4)
    ], ServicemanagementServicesRolloutsListSecurity.prototype, "option4", void 0);
    return ServicemanagementServicesRolloutsListSecurity;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsListSecurity };
var ServicemanagementServicesRolloutsListRequest = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsListRequest, _super);
    function ServicemanagementServicesRolloutsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesRolloutsListPathParams)
    ], ServicemanagementServicesRolloutsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesRolloutsListQueryParams)
    ], ServicemanagementServicesRolloutsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesRolloutsListSecurity)
    ], ServicemanagementServicesRolloutsListRequest.prototype, "security", void 0);
    return ServicemanagementServicesRolloutsListRequest;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsListRequest };
var ServicemanagementServicesRolloutsListResponse = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsListResponse, _super);
    function ServicemanagementServicesRolloutsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListServiceRolloutsResponse)
    ], ServicemanagementServicesRolloutsListResponse.prototype, "listServiceRolloutsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicemanagementServicesRolloutsListResponse.prototype, "statusCode", void 0);
    return ServicemanagementServicesRolloutsListResponse;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsListResponse };
