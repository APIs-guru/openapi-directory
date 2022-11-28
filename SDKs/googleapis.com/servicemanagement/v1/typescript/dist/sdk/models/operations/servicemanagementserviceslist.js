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
var ServicemanagementServicesListQueryParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesListQueryParams, _super);
    function ServicemanagementServicesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=consumerId" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesListQueryParams.prototype, "consumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ServicemanagementServicesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicemanagementServicesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=producerProjectId" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesListQueryParams.prototype, "producerProjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesListQueryParams.prototype, "uploadProtocol", void 0);
    return ServicemanagementServicesListQueryParams;
}(SpeakeasyBase));
export { ServicemanagementServicesListQueryParams };
var ServicemanagementServicesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesListSecurityOption1, _super);
    function ServicemanagementServicesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesListSecurityOption1.prototype, "oauth2c", void 0);
    return ServicemanagementServicesListSecurityOption1;
}(SpeakeasyBase));
export { ServicemanagementServicesListSecurityOption1 };
var ServicemanagementServicesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesListSecurityOption2, _super);
    function ServicemanagementServicesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesListSecurityOption2.prototype, "oauth2c", void 0);
    return ServicemanagementServicesListSecurityOption2;
}(SpeakeasyBase));
export { ServicemanagementServicesListSecurityOption2 };
var ServicemanagementServicesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesListSecurityOption3, _super);
    function ServicemanagementServicesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesListSecurityOption3.prototype, "oauth2c", void 0);
    return ServicemanagementServicesListSecurityOption3;
}(SpeakeasyBase));
export { ServicemanagementServicesListSecurityOption3 };
var ServicemanagementServicesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesListSecurityOption4, _super);
    function ServicemanagementServicesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesListSecurityOption4.prototype, "oauth2c", void 0);
    return ServicemanagementServicesListSecurityOption4;
}(SpeakeasyBase));
export { ServicemanagementServicesListSecurityOption4 };
var ServicemanagementServicesListSecurity = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesListSecurity, _super);
    function ServicemanagementServicesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesListSecurityOption1)
    ], ServicemanagementServicesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesListSecurityOption2)
    ], ServicemanagementServicesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesListSecurityOption3)
    ], ServicemanagementServicesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesListSecurityOption4)
    ], ServicemanagementServicesListSecurity.prototype, "option4", void 0);
    return ServicemanagementServicesListSecurity;
}(SpeakeasyBase));
export { ServicemanagementServicesListSecurity };
var ServicemanagementServicesListRequest = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesListRequest, _super);
    function ServicemanagementServicesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesListQueryParams)
    ], ServicemanagementServicesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesListSecurity)
    ], ServicemanagementServicesListRequest.prototype, "security", void 0);
    return ServicemanagementServicesListRequest;
}(SpeakeasyBase));
export { ServicemanagementServicesListRequest };
var ServicemanagementServicesListResponse = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesListResponse, _super);
    function ServicemanagementServicesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicemanagementServicesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListServicesResponse)
    ], ServicemanagementServicesListResponse.prototype, "listServicesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicemanagementServicesListResponse.prototype, "statusCode", void 0);
    return ServicemanagementServicesListResponse;
}(SpeakeasyBase));
export { ServicemanagementServicesListResponse };
