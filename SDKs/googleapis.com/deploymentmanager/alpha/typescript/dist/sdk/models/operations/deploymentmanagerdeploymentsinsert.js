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
var DeploymentmanagerDeploymentsInsertPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsInsertPathParams, _super);
    function DeploymentmanagerDeploymentsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsInsertPathParams.prototype, "project", void 0);
    return DeploymentmanagerDeploymentsInsertPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsInsertPathParams };
export var DeploymentmanagerDeploymentsInsertCreatePolicyEnum;
(function (DeploymentmanagerDeploymentsInsertCreatePolicyEnum) {
    DeploymentmanagerDeploymentsInsertCreatePolicyEnum["CreateOrAcquire"] = "CREATE_OR_ACQUIRE";
    DeploymentmanagerDeploymentsInsertCreatePolicyEnum["Acquire"] = "ACQUIRE";
    DeploymentmanagerDeploymentsInsertCreatePolicyEnum["Create"] = "CREATE";
})(DeploymentmanagerDeploymentsInsertCreatePolicyEnum || (DeploymentmanagerDeploymentsInsertCreatePolicyEnum = {}));
var DeploymentmanagerDeploymentsInsertQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsInsertQueryParams, _super);
    function DeploymentmanagerDeploymentsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createPolicy" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsInsertQueryParams.prototype, "createPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerDeploymentsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preview" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerDeploymentsInsertQueryParams.prototype, "preview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsInsertQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerDeploymentsInsertQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsInsertQueryParams };
var DeploymentmanagerDeploymentsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsInsertSecurityOption1, _super);
    function DeploymentmanagerDeploymentsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsInsertSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsInsertSecurityOption1 };
var DeploymentmanagerDeploymentsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsInsertSecurityOption2, _super);
    function DeploymentmanagerDeploymentsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsInsertSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsInsertSecurityOption2 };
var DeploymentmanagerDeploymentsInsertSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsInsertSecurity, _super);
    function DeploymentmanagerDeploymentsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsInsertSecurityOption1)
    ], DeploymentmanagerDeploymentsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsInsertSecurityOption2)
    ], DeploymentmanagerDeploymentsInsertSecurity.prototype, "option2", void 0);
    return DeploymentmanagerDeploymentsInsertSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsInsertSecurity };
var DeploymentmanagerDeploymentsInsertRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsInsertRequest, _super);
    function DeploymentmanagerDeploymentsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsInsertPathParams)
    ], DeploymentmanagerDeploymentsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsInsertQueryParams)
    ], DeploymentmanagerDeploymentsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Deployment)
    ], DeploymentmanagerDeploymentsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsInsertSecurity)
    ], DeploymentmanagerDeploymentsInsertRequest.prototype, "security", void 0);
    return DeploymentmanagerDeploymentsInsertRequest;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsInsertRequest };
var DeploymentmanagerDeploymentsInsertResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsInsertResponse, _super);
    function DeploymentmanagerDeploymentsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DeploymentmanagerDeploymentsInsertResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerDeploymentsInsertResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerDeploymentsInsertResponse;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsInsertResponse };
