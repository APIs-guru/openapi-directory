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
var PeopleContactGroupsBatchGetQueryParams = /** @class */ (function (_super) {
    __extends(PeopleContactGroupsBatchGetQueryParams, _super);
    function PeopleContactGroupsBatchGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsBatchGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsBatchGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsBatchGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsBatchGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsBatchGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupFields" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsBatchGetQueryParams.prototype, "groupFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsBatchGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxMembers" }),
        __metadata("design:type", Number)
    ], PeopleContactGroupsBatchGetQueryParams.prototype, "maxMembers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsBatchGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PeopleContactGroupsBatchGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsBatchGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceNames" }),
        __metadata("design:type", Array)
    ], PeopleContactGroupsBatchGetQueryParams.prototype, "resourceNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsBatchGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsBatchGetQueryParams.prototype, "uploadProtocol", void 0);
    return PeopleContactGroupsBatchGetQueryParams;
}(SpeakeasyBase));
export { PeopleContactGroupsBatchGetQueryParams };
var PeopleContactGroupsBatchGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(PeopleContactGroupsBatchGetSecurityOption1, _super);
    function PeopleContactGroupsBatchGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeopleContactGroupsBatchGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeopleContactGroupsBatchGetSecurityOption1.prototype, "oauth2c", void 0);
    return PeopleContactGroupsBatchGetSecurityOption1;
}(SpeakeasyBase));
export { PeopleContactGroupsBatchGetSecurityOption1 };
var PeopleContactGroupsBatchGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(PeopleContactGroupsBatchGetSecurityOption2, _super);
    function PeopleContactGroupsBatchGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeopleContactGroupsBatchGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeopleContactGroupsBatchGetSecurityOption2.prototype, "oauth2c", void 0);
    return PeopleContactGroupsBatchGetSecurityOption2;
}(SpeakeasyBase));
export { PeopleContactGroupsBatchGetSecurityOption2 };
var PeopleContactGroupsBatchGetSecurity = /** @class */ (function (_super) {
    __extends(PeopleContactGroupsBatchGetSecurity, _super);
    function PeopleContactGroupsBatchGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeopleContactGroupsBatchGetSecurityOption1)
    ], PeopleContactGroupsBatchGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeopleContactGroupsBatchGetSecurityOption2)
    ], PeopleContactGroupsBatchGetSecurity.prototype, "option2", void 0);
    return PeopleContactGroupsBatchGetSecurity;
}(SpeakeasyBase));
export { PeopleContactGroupsBatchGetSecurity };
var PeopleContactGroupsBatchGetRequest = /** @class */ (function (_super) {
    __extends(PeopleContactGroupsBatchGetRequest, _super);
    function PeopleContactGroupsBatchGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeopleContactGroupsBatchGetQueryParams)
    ], PeopleContactGroupsBatchGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeopleContactGroupsBatchGetSecurity)
    ], PeopleContactGroupsBatchGetRequest.prototype, "security", void 0);
    return PeopleContactGroupsBatchGetRequest;
}(SpeakeasyBase));
export { PeopleContactGroupsBatchGetRequest };
var PeopleContactGroupsBatchGetResponse = /** @class */ (function (_super) {
    __extends(PeopleContactGroupsBatchGetResponse, _super);
    function PeopleContactGroupsBatchGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchGetContactGroupsResponse)
    ], PeopleContactGroupsBatchGetResponse.prototype, "batchGetContactGroupsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PeopleContactGroupsBatchGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PeopleContactGroupsBatchGetResponse.prototype, "statusCode", void 0);
    return PeopleContactGroupsBatchGetResponse;
}(SpeakeasyBase));
export { PeopleContactGroupsBatchGetResponse };
