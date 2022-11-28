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
var DeploymentmanagerDeploymentsDeletePathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsDeletePathParams, _super);
    function DeploymentmanagerDeploymentsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deployment" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsDeletePathParams.prototype, "deployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsDeletePathParams.prototype, "project", void 0);
    return DeploymentmanagerDeploymentsDeletePathParams;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsDeletePathParams };
export var DeploymentmanagerDeploymentsDeleteDeletePolicyEnum;
(function (DeploymentmanagerDeploymentsDeleteDeletePolicyEnum) {
    DeploymentmanagerDeploymentsDeleteDeletePolicyEnum["Delete"] = "DELETE";
    DeploymentmanagerDeploymentsDeleteDeletePolicyEnum["Abandon"] = "ABANDON";
})(DeploymentmanagerDeploymentsDeleteDeletePolicyEnum || (DeploymentmanagerDeploymentsDeleteDeletePolicyEnum = {}));
var DeploymentmanagerDeploymentsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsDeleteQueryParams, _super);
    function DeploymentmanagerDeploymentsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deletePolicy" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsDeleteQueryParams.prototype, "deletePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerDeploymentsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerDeploymentsDeleteQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsDeleteQueryParams };
var DeploymentmanagerDeploymentsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsDeleteSecurityOption1, _super);
    function DeploymentmanagerDeploymentsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsDeleteSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsDeleteSecurityOption1 };
var DeploymentmanagerDeploymentsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsDeleteSecurityOption2, _super);
    function DeploymentmanagerDeploymentsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsDeleteSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsDeleteSecurityOption2 };
var DeploymentmanagerDeploymentsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsDeleteSecurity, _super);
    function DeploymentmanagerDeploymentsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsDeleteSecurityOption1)
    ], DeploymentmanagerDeploymentsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsDeleteSecurityOption2)
    ], DeploymentmanagerDeploymentsDeleteSecurity.prototype, "option2", void 0);
    return DeploymentmanagerDeploymentsDeleteSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsDeleteSecurity };
var DeploymentmanagerDeploymentsDeleteRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsDeleteRequest, _super);
    function DeploymentmanagerDeploymentsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsDeletePathParams)
    ], DeploymentmanagerDeploymentsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsDeleteQueryParams)
    ], DeploymentmanagerDeploymentsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsDeleteSecurity)
    ], DeploymentmanagerDeploymentsDeleteRequest.prototype, "security", void 0);
    return DeploymentmanagerDeploymentsDeleteRequest;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsDeleteRequest };
var DeploymentmanagerDeploymentsDeleteResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsDeleteResponse, _super);
    function DeploymentmanagerDeploymentsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DeploymentmanagerDeploymentsDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerDeploymentsDeleteResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerDeploymentsDeleteResponse;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsDeleteResponse };
