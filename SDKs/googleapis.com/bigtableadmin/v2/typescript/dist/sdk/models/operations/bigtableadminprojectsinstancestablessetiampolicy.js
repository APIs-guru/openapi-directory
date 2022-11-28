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
var BigtableadminProjectsInstancesTablesSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesSetIamPolicyPathParams, _super);
    function BigtableadminProjectsInstancesTablesSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyPathParams.prototype, "resource", void 0);
    return BigtableadminProjectsInstancesTablesSetIamPolicyPathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesSetIamPolicyPathParams };
var BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams, _super);
    function BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams };
var BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1, _super);
    function BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1 };
var BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption2, _super);
    function BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption2 };
var BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption3, _super);
    function BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption3 };
var BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption4, _super);
    function BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption4 };
var BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption5, _super);
    function BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption5 };
var BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption6, _super);
    function BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption6;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption6 };
var BigtableadminProjectsInstancesTablesSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesSetIamPolicySecurity, _super);
    function BigtableadminProjectsInstancesTablesSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption2)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption3)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption4)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption5)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption6)
    ], BigtableadminProjectsInstancesTablesSetIamPolicySecurity.prototype, "option6", void 0);
    return BigtableadminProjectsInstancesTablesSetIamPolicySecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesSetIamPolicySecurity };
var BigtableadminProjectsInstancesTablesSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesSetIamPolicyRequest, _super);
    function BigtableadminProjectsInstancesTablesSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesSetIamPolicyPathParams)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesSetIamPolicySecurity)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesTablesSetIamPolicyRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesSetIamPolicyRequest };
var BigtableadminProjectsInstancesTablesSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesSetIamPolicyResponse, _super);
    function BigtableadminProjectsInstancesTablesSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesTablesSetIamPolicyResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesTablesSetIamPolicyResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesSetIamPolicyResponse };
