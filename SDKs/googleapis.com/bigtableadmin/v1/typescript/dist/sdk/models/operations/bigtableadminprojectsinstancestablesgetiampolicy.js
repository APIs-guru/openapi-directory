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
var BigtableadminProjectsInstancesTablesGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGetIamPolicyPathParams, _super);
    function BigtableadminProjectsInstancesTablesGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyPathParams.prototype, "resource", void 0);
    return BigtableadminProjectsInstancesTablesGetIamPolicyPathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGetIamPolicyPathParams };
var BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams, _super);
    function BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams };
var BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption1, _super);
    function BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption1 };
var BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption2, _super);
    function BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption2 };
var BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption3, _super);
    function BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption3 };
var BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption4, _super);
    function BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption4 };
var BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption5, _super);
    function BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption5 };
var BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption6, _super);
    function BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption6;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption6 };
var BigtableadminProjectsInstancesTablesGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGetIamPolicySecurity, _super);
    function BigtableadminProjectsInstancesTablesGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption1)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption2)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption3)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption4)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption5)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption6)
    ], BigtableadminProjectsInstancesTablesGetIamPolicySecurity.prototype, "option6", void 0);
    return BigtableadminProjectsInstancesTablesGetIamPolicySecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGetIamPolicySecurity };
var BigtableadminProjectsInstancesTablesGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGetIamPolicyRequest, _super);
    function BigtableadminProjectsInstancesTablesGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesGetIamPolicyPathParams)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetIamPolicyRequest)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesGetIamPolicySecurity)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesTablesGetIamPolicyRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGetIamPolicyRequest };
var BigtableadminProjectsInstancesTablesGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGetIamPolicyResponse, _super);
    function BigtableadminProjectsInstancesTablesGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesTablesGetIamPolicyResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesTablesGetIamPolicyResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGetIamPolicyResponse };
