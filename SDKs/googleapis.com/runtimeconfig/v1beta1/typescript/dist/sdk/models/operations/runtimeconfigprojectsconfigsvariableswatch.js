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
var RuntimeconfigProjectsConfigsVariablesWatchPathParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesWatchPathParams, _super);
    function RuntimeconfigProjectsConfigsVariablesWatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesWatchPathParams.prototype, "name", void 0);
    return RuntimeconfigProjectsConfigsVariablesWatchPathParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesWatchPathParams };
var RuntimeconfigProjectsConfigsVariablesWatchQueryParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesWatchQueryParams, _super);
    function RuntimeconfigProjectsConfigsVariablesWatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesWatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesWatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesWatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesWatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesWatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesWatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesWatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RuntimeconfigProjectsConfigsVariablesWatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesWatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesWatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesWatchQueryParams.prototype, "uploadProtocol", void 0);
    return RuntimeconfigProjectsConfigsVariablesWatchQueryParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesWatchQueryParams };
var RuntimeconfigProjectsConfigsVariablesWatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesWatchSecurityOption1, _super);
    function RuntimeconfigProjectsConfigsVariablesWatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsVariablesWatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsVariablesWatchSecurityOption1.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsVariablesWatchSecurityOption1;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesWatchSecurityOption1 };
var RuntimeconfigProjectsConfigsVariablesWatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesWatchSecurityOption2, _super);
    function RuntimeconfigProjectsConfigsVariablesWatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsVariablesWatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsVariablesWatchSecurityOption2.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsVariablesWatchSecurityOption2;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesWatchSecurityOption2 };
var RuntimeconfigProjectsConfigsVariablesWatchSecurity = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesWatchSecurity, _super);
    function RuntimeconfigProjectsConfigsVariablesWatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesWatchSecurityOption1)
    ], RuntimeconfigProjectsConfigsVariablesWatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesWatchSecurityOption2)
    ], RuntimeconfigProjectsConfigsVariablesWatchSecurity.prototype, "option2", void 0);
    return RuntimeconfigProjectsConfigsVariablesWatchSecurity;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesWatchSecurity };
var RuntimeconfigProjectsConfigsVariablesWatchRequest = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesWatchRequest, _super);
    function RuntimeconfigProjectsConfigsVariablesWatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesWatchPathParams)
    ], RuntimeconfigProjectsConfigsVariablesWatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesWatchQueryParams)
    ], RuntimeconfigProjectsConfigsVariablesWatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WatchVariableRequest)
    ], RuntimeconfigProjectsConfigsVariablesWatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesWatchSecurity)
    ], RuntimeconfigProjectsConfigsVariablesWatchRequest.prototype, "security", void 0);
    return RuntimeconfigProjectsConfigsVariablesWatchRequest;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesWatchRequest };
var RuntimeconfigProjectsConfigsVariablesWatchResponse = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesWatchResponse, _super);
    function RuntimeconfigProjectsConfigsVariablesWatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesWatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RuntimeconfigProjectsConfigsVariablesWatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Variable)
    ], RuntimeconfigProjectsConfigsVariablesWatchResponse.prototype, "variable", void 0);
    return RuntimeconfigProjectsConfigsVariablesWatchResponse;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesWatchResponse };
