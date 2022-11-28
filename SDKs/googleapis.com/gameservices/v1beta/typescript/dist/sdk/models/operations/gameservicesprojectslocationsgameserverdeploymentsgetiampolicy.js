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
var GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyPathParams, _super);
    function GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyPathParams.prototype, "resource", void 0);
    return GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyPathParams };
var GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams, _super);
    function GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams };
var GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity, _super);
    function GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity };
var GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest, _super);
    function GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyPathParams)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest.prototype, "security", void 0);
    return GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest };
var GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyResponse, _super);
    function GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyResponse;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyResponse };
