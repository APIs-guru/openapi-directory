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
var IamPoliciesListPoliciesPathParams = /** @class */ (function (_super) {
    __extends(IamPoliciesListPoliciesPathParams, _super);
    function IamPoliciesListPoliciesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IamPoliciesListPoliciesPathParams.prototype, "parent", void 0);
    return IamPoliciesListPoliciesPathParams;
}(SpeakeasyBase));
export { IamPoliciesListPoliciesPathParams };
var IamPoliciesListPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(IamPoliciesListPoliciesQueryParams, _super);
    function IamPoliciesListPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IamPoliciesListPoliciesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IamPoliciesListPoliciesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IamPoliciesListPoliciesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IamPoliciesListPoliciesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IamPoliciesListPoliciesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IamPoliciesListPoliciesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IamPoliciesListPoliciesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], IamPoliciesListPoliciesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], IamPoliciesListPoliciesQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IamPoliciesListPoliciesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IamPoliciesListPoliciesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IamPoliciesListPoliciesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IamPoliciesListPoliciesQueryParams.prototype, "uploadProtocol", void 0);
    return IamPoliciesListPoliciesQueryParams;
}(SpeakeasyBase));
export { IamPoliciesListPoliciesQueryParams };
var IamPoliciesListPoliciesSecurity = /** @class */ (function (_super) {
    __extends(IamPoliciesListPoliciesSecurity, _super);
    function IamPoliciesListPoliciesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IamPoliciesListPoliciesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IamPoliciesListPoliciesSecurity.prototype, "oauth2c", void 0);
    return IamPoliciesListPoliciesSecurity;
}(SpeakeasyBase));
export { IamPoliciesListPoliciesSecurity };
var IamPoliciesListPoliciesRequest = /** @class */ (function (_super) {
    __extends(IamPoliciesListPoliciesRequest, _super);
    function IamPoliciesListPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IamPoliciesListPoliciesPathParams)
    ], IamPoliciesListPoliciesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IamPoliciesListPoliciesQueryParams)
    ], IamPoliciesListPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IamPoliciesListPoliciesSecurity)
    ], IamPoliciesListPoliciesRequest.prototype, "security", void 0);
    return IamPoliciesListPoliciesRequest;
}(SpeakeasyBase));
export { IamPoliciesListPoliciesRequest };
var IamPoliciesListPoliciesResponse = /** @class */ (function (_super) {
    __extends(IamPoliciesListPoliciesResponse, _super);
    function IamPoliciesListPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IamPoliciesListPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleIamV2betaListPoliciesResponse)
    ], IamPoliciesListPoliciesResponse.prototype, "googleIamV2betaListPoliciesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IamPoliciesListPoliciesResponse.prototype, "statusCode", void 0);
    return IamPoliciesListPoliciesResponse;
}(SpeakeasyBase));
export { IamPoliciesListPoliciesResponse };
