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
var CloudassetIamPoliciesSearchAllPathParams = /** @class */ (function (_super) {
    __extends(CloudassetIamPoliciesSearchAllPathParams, _super);
    function CloudassetIamPoliciesSearchAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scope" }),
        __metadata("design:type", String)
    ], CloudassetIamPoliciesSearchAllPathParams.prototype, "scope", void 0);
    return CloudassetIamPoliciesSearchAllPathParams;
}(SpeakeasyBase));
export { CloudassetIamPoliciesSearchAllPathParams };
var CloudassetIamPoliciesSearchAllQueryParams = /** @class */ (function (_super) {
    __extends(CloudassetIamPoliciesSearchAllQueryParams, _super);
    function CloudassetIamPoliciesSearchAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudassetIamPoliciesSearchAllQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudassetIamPoliciesSearchAllQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudassetIamPoliciesSearchAllQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudassetIamPoliciesSearchAllQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudassetIamPoliciesSearchAllQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudassetIamPoliciesSearchAllQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudassetIamPoliciesSearchAllQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudassetIamPoliciesSearchAllQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudassetIamPoliciesSearchAllQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudassetIamPoliciesSearchAllQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], CloudassetIamPoliciesSearchAllQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudassetIamPoliciesSearchAllQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudassetIamPoliciesSearchAllQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudassetIamPoliciesSearchAllQueryParams.prototype, "uploadProtocol", void 0);
    return CloudassetIamPoliciesSearchAllQueryParams;
}(SpeakeasyBase));
export { CloudassetIamPoliciesSearchAllQueryParams };
var CloudassetIamPoliciesSearchAllSecurity = /** @class */ (function (_super) {
    __extends(CloudassetIamPoliciesSearchAllSecurity, _super);
    function CloudassetIamPoliciesSearchAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudassetIamPoliciesSearchAllSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudassetIamPoliciesSearchAllSecurity.prototype, "oauth2c", void 0);
    return CloudassetIamPoliciesSearchAllSecurity;
}(SpeakeasyBase));
export { CloudassetIamPoliciesSearchAllSecurity };
var CloudassetIamPoliciesSearchAllRequest = /** @class */ (function (_super) {
    __extends(CloudassetIamPoliciesSearchAllRequest, _super);
    function CloudassetIamPoliciesSearchAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetIamPoliciesSearchAllPathParams)
    ], CloudassetIamPoliciesSearchAllRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetIamPoliciesSearchAllQueryParams)
    ], CloudassetIamPoliciesSearchAllRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetIamPoliciesSearchAllSecurity)
    ], CloudassetIamPoliciesSearchAllRequest.prototype, "security", void 0);
    return CloudassetIamPoliciesSearchAllRequest;
}(SpeakeasyBase));
export { CloudassetIamPoliciesSearchAllRequest };
var CloudassetIamPoliciesSearchAllResponse = /** @class */ (function (_super) {
    __extends(CloudassetIamPoliciesSearchAllResponse, _super);
    function CloudassetIamPoliciesSearchAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudassetIamPoliciesSearchAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchAllIamPoliciesResponse)
    ], CloudassetIamPoliciesSearchAllResponse.prototype, "searchAllIamPoliciesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudassetIamPoliciesSearchAllResponse.prototype, "statusCode", void 0);
    return CloudassetIamPoliciesSearchAllResponse;
}(SpeakeasyBase));
export { CloudassetIamPoliciesSearchAllResponse };
