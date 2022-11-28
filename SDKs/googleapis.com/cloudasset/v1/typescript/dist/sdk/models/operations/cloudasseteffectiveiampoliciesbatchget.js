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
var CloudassetEffectiveIamPoliciesBatchGetPathParams = /** @class */ (function (_super) {
    __extends(CloudassetEffectiveIamPoliciesBatchGetPathParams, _super);
    function CloudassetEffectiveIamPoliciesBatchGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scope" }),
        __metadata("design:type", String)
    ], CloudassetEffectiveIamPoliciesBatchGetPathParams.prototype, "scope", void 0);
    return CloudassetEffectiveIamPoliciesBatchGetPathParams;
}(SpeakeasyBase));
export { CloudassetEffectiveIamPoliciesBatchGetPathParams };
var CloudassetEffectiveIamPoliciesBatchGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudassetEffectiveIamPoliciesBatchGetQueryParams, _super);
    function CloudassetEffectiveIamPoliciesBatchGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudassetEffectiveIamPoliciesBatchGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudassetEffectiveIamPoliciesBatchGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudassetEffectiveIamPoliciesBatchGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudassetEffectiveIamPoliciesBatchGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudassetEffectiveIamPoliciesBatchGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudassetEffectiveIamPoliciesBatchGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=names" }),
        __metadata("design:type", Array)
    ], CloudassetEffectiveIamPoliciesBatchGetQueryParams.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudassetEffectiveIamPoliciesBatchGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudassetEffectiveIamPoliciesBatchGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudassetEffectiveIamPoliciesBatchGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudassetEffectiveIamPoliciesBatchGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudassetEffectiveIamPoliciesBatchGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudassetEffectiveIamPoliciesBatchGetQueryParams;
}(SpeakeasyBase));
export { CloudassetEffectiveIamPoliciesBatchGetQueryParams };
var CloudassetEffectiveIamPoliciesBatchGetSecurity = /** @class */ (function (_super) {
    __extends(CloudassetEffectiveIamPoliciesBatchGetSecurity, _super);
    function CloudassetEffectiveIamPoliciesBatchGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudassetEffectiveIamPoliciesBatchGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudassetEffectiveIamPoliciesBatchGetSecurity.prototype, "oauth2c", void 0);
    return CloudassetEffectiveIamPoliciesBatchGetSecurity;
}(SpeakeasyBase));
export { CloudassetEffectiveIamPoliciesBatchGetSecurity };
var CloudassetEffectiveIamPoliciesBatchGetRequest = /** @class */ (function (_super) {
    __extends(CloudassetEffectiveIamPoliciesBatchGetRequest, _super);
    function CloudassetEffectiveIamPoliciesBatchGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetEffectiveIamPoliciesBatchGetPathParams)
    ], CloudassetEffectiveIamPoliciesBatchGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetEffectiveIamPoliciesBatchGetQueryParams)
    ], CloudassetEffectiveIamPoliciesBatchGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetEffectiveIamPoliciesBatchGetSecurity)
    ], CloudassetEffectiveIamPoliciesBatchGetRequest.prototype, "security", void 0);
    return CloudassetEffectiveIamPoliciesBatchGetRequest;
}(SpeakeasyBase));
export { CloudassetEffectiveIamPoliciesBatchGetRequest };
var CloudassetEffectiveIamPoliciesBatchGetResponse = /** @class */ (function (_super) {
    __extends(CloudassetEffectiveIamPoliciesBatchGetResponse, _super);
    function CloudassetEffectiveIamPoliciesBatchGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchGetEffectiveIamPoliciesResponse)
    ], CloudassetEffectiveIamPoliciesBatchGetResponse.prototype, "batchGetEffectiveIamPoliciesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudassetEffectiveIamPoliciesBatchGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudassetEffectiveIamPoliciesBatchGetResponse.prototype, "statusCode", void 0);
    return CloudassetEffectiveIamPoliciesBatchGetResponse;
}(SpeakeasyBase));
export { CloudassetEffectiveIamPoliciesBatchGetResponse };
