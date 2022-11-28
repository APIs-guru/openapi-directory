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
var FirebaserulesProjectsRulesetsListPathParams = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsListPathParams, _super);
    function FirebaserulesProjectsRulesetsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsListPathParams.prototype, "name", void 0);
    return FirebaserulesProjectsRulesetsListPathParams;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsListPathParams };
var FirebaserulesProjectsRulesetsListQueryParams = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsListQueryParams, _super);
    function FirebaserulesProjectsRulesetsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebaserulesProjectsRulesetsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaserulesProjectsRulesetsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaserulesProjectsRulesetsListQueryParams;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsListQueryParams };
var FirebaserulesProjectsRulesetsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsListSecurityOption1, _super);
    function FirebaserulesProjectsRulesetsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsRulesetsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsRulesetsListSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsRulesetsListSecurityOption1;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsListSecurityOption1 };
var FirebaserulesProjectsRulesetsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsListSecurityOption2, _super);
    function FirebaserulesProjectsRulesetsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsRulesetsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsRulesetsListSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsRulesetsListSecurityOption2;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsListSecurityOption2 };
var FirebaserulesProjectsRulesetsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsListSecurityOption3, _super);
    function FirebaserulesProjectsRulesetsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaserulesProjectsRulesetsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaserulesProjectsRulesetsListSecurityOption3.prototype, "oauth2c", void 0);
    return FirebaserulesProjectsRulesetsListSecurityOption3;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsListSecurityOption3 };
var FirebaserulesProjectsRulesetsListSecurity = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsListSecurity, _super);
    function FirebaserulesProjectsRulesetsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsRulesetsListSecurityOption1)
    ], FirebaserulesProjectsRulesetsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsRulesetsListSecurityOption2)
    ], FirebaserulesProjectsRulesetsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaserulesProjectsRulesetsListSecurityOption3)
    ], FirebaserulesProjectsRulesetsListSecurity.prototype, "option3", void 0);
    return FirebaserulesProjectsRulesetsListSecurity;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsListSecurity };
var FirebaserulesProjectsRulesetsListRequest = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsListRequest, _super);
    function FirebaserulesProjectsRulesetsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsRulesetsListPathParams)
    ], FirebaserulesProjectsRulesetsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsRulesetsListQueryParams)
    ], FirebaserulesProjectsRulesetsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaserulesProjectsRulesetsListSecurity)
    ], FirebaserulesProjectsRulesetsListRequest.prototype, "security", void 0);
    return FirebaserulesProjectsRulesetsListRequest;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsListRequest };
var FirebaserulesProjectsRulesetsListResponse = /** @class */ (function (_super) {
    __extends(FirebaserulesProjectsRulesetsListResponse, _super);
    function FirebaserulesProjectsRulesetsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaserulesProjectsRulesetsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListRulesetsResponse)
    ], FirebaserulesProjectsRulesetsListResponse.prototype, "listRulesetsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaserulesProjectsRulesetsListResponse.prototype, "statusCode", void 0);
    return FirebaserulesProjectsRulesetsListResponse;
}(SpeakeasyBase));
export { FirebaserulesProjectsRulesetsListResponse };
