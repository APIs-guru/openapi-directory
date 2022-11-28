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
var JobsProjectsTenantsClientEventsCreatePathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsClientEventsCreatePathParams, _super);
    function JobsProjectsTenantsClientEventsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsClientEventsCreatePathParams.prototype, "parent", void 0);
    return JobsProjectsTenantsClientEventsCreatePathParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsClientEventsCreatePathParams };
var JobsProjectsTenantsClientEventsCreateQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsClientEventsCreateQueryParams, _super);
    function JobsProjectsTenantsClientEventsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsClientEventsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsClientEventsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsClientEventsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsClientEventsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsClientEventsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsClientEventsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsClientEventsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsTenantsClientEventsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsClientEventsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsClientEventsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsClientEventsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsTenantsClientEventsCreateQueryParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsClientEventsCreateQueryParams };
var JobsProjectsTenantsClientEventsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsClientEventsCreateSecurityOption1, _super);
    function JobsProjectsTenantsClientEventsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsClientEventsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsClientEventsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsClientEventsCreateSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsTenantsClientEventsCreateSecurityOption1 };
var JobsProjectsTenantsClientEventsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsClientEventsCreateSecurityOption2, _super);
    function JobsProjectsTenantsClientEventsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsClientEventsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsClientEventsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsClientEventsCreateSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsTenantsClientEventsCreateSecurityOption2 };
var JobsProjectsTenantsClientEventsCreateSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsClientEventsCreateSecurity, _super);
    function JobsProjectsTenantsClientEventsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsClientEventsCreateSecurityOption1)
    ], JobsProjectsTenantsClientEventsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsClientEventsCreateSecurityOption2)
    ], JobsProjectsTenantsClientEventsCreateSecurity.prototype, "option2", void 0);
    return JobsProjectsTenantsClientEventsCreateSecurity;
}(SpeakeasyBase));
export { JobsProjectsTenantsClientEventsCreateSecurity };
var JobsProjectsTenantsClientEventsCreateRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsClientEventsCreateRequest, _super);
    function JobsProjectsTenantsClientEventsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsClientEventsCreatePathParams)
    ], JobsProjectsTenantsClientEventsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsClientEventsCreateQueryParams)
    ], JobsProjectsTenantsClientEventsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ClientEvent)
    ], JobsProjectsTenantsClientEventsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsClientEventsCreateSecurity)
    ], JobsProjectsTenantsClientEventsCreateRequest.prototype, "security", void 0);
    return JobsProjectsTenantsClientEventsCreateRequest;
}(SpeakeasyBase));
export { JobsProjectsTenantsClientEventsCreateRequest };
var JobsProjectsTenantsClientEventsCreateResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsClientEventsCreateResponse, _super);
    function JobsProjectsTenantsClientEventsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ClientEvent)
    ], JobsProjectsTenantsClientEventsCreateResponse.prototype, "clientEvent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsTenantsClientEventsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsTenantsClientEventsCreateResponse.prototype, "statusCode", void 0);
    return JobsProjectsTenantsClientEventsCreateResponse;
}(SpeakeasyBase));
export { JobsProjectsTenantsClientEventsCreateResponse };
