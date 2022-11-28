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
var MonitoringProjectsGroupsCreatePathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsCreatePathParams, _super);
    function MonitoringProjectsGroupsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsCreatePathParams.prototype, "name", void 0);
    return MonitoringProjectsGroupsCreatePathParams;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsCreatePathParams };
var MonitoringProjectsGroupsCreateQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsCreateQueryParams, _super);
    function MonitoringProjectsGroupsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsGroupsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsGroupsCreateQueryParams.prototype, "validateOnly", void 0);
    return MonitoringProjectsGroupsCreateQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsCreateQueryParams };
var MonitoringProjectsGroupsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsCreateSecurityOption1, _super);
    function MonitoringProjectsGroupsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsGroupsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsGroupsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsGroupsCreateSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsCreateSecurityOption1 };
var MonitoringProjectsGroupsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsCreateSecurityOption2, _super);
    function MonitoringProjectsGroupsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsGroupsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsGroupsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsGroupsCreateSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsCreateSecurityOption2 };
var MonitoringProjectsGroupsCreateSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsCreateSecurity, _super);
    function MonitoringProjectsGroupsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsGroupsCreateSecurityOption1)
    ], MonitoringProjectsGroupsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsGroupsCreateSecurityOption2)
    ], MonitoringProjectsGroupsCreateSecurity.prototype, "option2", void 0);
    return MonitoringProjectsGroupsCreateSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsCreateSecurity };
var MonitoringProjectsGroupsCreateRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsCreateRequest, _super);
    function MonitoringProjectsGroupsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsGroupsCreatePathParams)
    ], MonitoringProjectsGroupsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsGroupsCreateQueryParams)
    ], MonitoringProjectsGroupsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Group)
    ], MonitoringProjectsGroupsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsGroupsCreateSecurity)
    ], MonitoringProjectsGroupsCreateRequest.prototype, "security", void 0);
    return MonitoringProjectsGroupsCreateRequest;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsCreateRequest };
var MonitoringProjectsGroupsCreateResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsCreateResponse, _super);
    function MonitoringProjectsGroupsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Group)
    ], MonitoringProjectsGroupsCreateResponse.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsGroupsCreateResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsGroupsCreateResponse;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsCreateResponse };
