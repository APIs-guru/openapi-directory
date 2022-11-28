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
var RuntimeconfigProjectsConfigsVariablesUpdatePathParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesUpdatePathParams, _super);
    function RuntimeconfigProjectsConfigsVariablesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesUpdatePathParams.prototype, "name", void 0);
    return RuntimeconfigProjectsConfigsVariablesUpdatePathParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesUpdatePathParams };
var RuntimeconfigProjectsConfigsVariablesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesUpdateQueryParams, _super);
    function RuntimeconfigProjectsConfigsVariablesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RuntimeconfigProjectsConfigsVariablesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return RuntimeconfigProjectsConfigsVariablesUpdateQueryParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesUpdateQueryParams };
var RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption1, _super);
    function RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption1;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption1 };
var RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption2, _super);
    function RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption2;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption2 };
var RuntimeconfigProjectsConfigsVariablesUpdateSecurity = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesUpdateSecurity, _super);
    function RuntimeconfigProjectsConfigsVariablesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption1)
    ], RuntimeconfigProjectsConfigsVariablesUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption2)
    ], RuntimeconfigProjectsConfigsVariablesUpdateSecurity.prototype, "option2", void 0);
    return RuntimeconfigProjectsConfigsVariablesUpdateSecurity;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesUpdateSecurity };
var RuntimeconfigProjectsConfigsVariablesUpdateRequest = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesUpdateRequest, _super);
    function RuntimeconfigProjectsConfigsVariablesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesUpdatePathParams)
    ], RuntimeconfigProjectsConfigsVariablesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesUpdateQueryParams)
    ], RuntimeconfigProjectsConfigsVariablesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Variable)
    ], RuntimeconfigProjectsConfigsVariablesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesUpdateSecurity)
    ], RuntimeconfigProjectsConfigsVariablesUpdateRequest.prototype, "security", void 0);
    return RuntimeconfigProjectsConfigsVariablesUpdateRequest;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesUpdateRequest };
var RuntimeconfigProjectsConfigsVariablesUpdateResponse = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesUpdateResponse, _super);
    function RuntimeconfigProjectsConfigsVariablesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RuntimeconfigProjectsConfigsVariablesUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Variable)
    ], RuntimeconfigProjectsConfigsVariablesUpdateResponse.prototype, "variable", void 0);
    return RuntimeconfigProjectsConfigsVariablesUpdateResponse;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesUpdateResponse };
