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
var JobsProjectsClientEventsCreatePathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsClientEventsCreatePathParams, _super);
    function JobsProjectsClientEventsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], JobsProjectsClientEventsCreatePathParams.prototype, "parent", void 0);
    return JobsProjectsClientEventsCreatePathParams;
}(SpeakeasyBase));
export { JobsProjectsClientEventsCreatePathParams };
var JobsProjectsClientEventsCreateQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsClientEventsCreateQueryParams, _super);
    function JobsProjectsClientEventsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsClientEventsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsClientEventsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsClientEventsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsClientEventsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsClientEventsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsClientEventsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsClientEventsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsClientEventsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsClientEventsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsClientEventsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsClientEventsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsClientEventsCreateQueryParams;
}(SpeakeasyBase));
export { JobsProjectsClientEventsCreateQueryParams };
var JobsProjectsClientEventsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsClientEventsCreateSecurityOption1, _super);
    function JobsProjectsClientEventsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsClientEventsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsClientEventsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsClientEventsCreateSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsClientEventsCreateSecurityOption1 };
var JobsProjectsClientEventsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsClientEventsCreateSecurityOption2, _super);
    function JobsProjectsClientEventsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsClientEventsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsClientEventsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsClientEventsCreateSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsClientEventsCreateSecurityOption2 };
var JobsProjectsClientEventsCreateSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsClientEventsCreateSecurity, _super);
    function JobsProjectsClientEventsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsClientEventsCreateSecurityOption1)
    ], JobsProjectsClientEventsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsClientEventsCreateSecurityOption2)
    ], JobsProjectsClientEventsCreateSecurity.prototype, "option2", void 0);
    return JobsProjectsClientEventsCreateSecurity;
}(SpeakeasyBase));
export { JobsProjectsClientEventsCreateSecurity };
var JobsProjectsClientEventsCreateRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsClientEventsCreateRequest, _super);
    function JobsProjectsClientEventsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsClientEventsCreatePathParams)
    ], JobsProjectsClientEventsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsClientEventsCreateQueryParams)
    ], JobsProjectsClientEventsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateClientEventRequest)
    ], JobsProjectsClientEventsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsClientEventsCreateSecurity)
    ], JobsProjectsClientEventsCreateRequest.prototype, "security", void 0);
    return JobsProjectsClientEventsCreateRequest;
}(SpeakeasyBase));
export { JobsProjectsClientEventsCreateRequest };
var JobsProjectsClientEventsCreateResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsClientEventsCreateResponse, _super);
    function JobsProjectsClientEventsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ClientEvent)
    ], JobsProjectsClientEventsCreateResponse.prototype, "clientEvent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsClientEventsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsClientEventsCreateResponse.prototype, "statusCode", void 0);
    return JobsProjectsClientEventsCreateResponse;
}(SpeakeasyBase));
export { JobsProjectsClientEventsCreateResponse };
