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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyPathParams, _super);
    function GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyPathParams.prototype, "resource", void 0);
    return GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyPathParams };
var GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams, _super);
    function GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams };
var GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicySecurity, _super);
    function GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicySecurity;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicySecurity };
var GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest, _super);
    function GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyPathParams)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicySecurity)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest.prototype, "security", void 0);
    return GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest };
var GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyResponse, _super);
    function GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyResponse;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyResponse };
