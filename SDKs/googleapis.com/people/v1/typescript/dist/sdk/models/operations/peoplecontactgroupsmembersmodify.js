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
var PeopleContactGroupsMembersModifyPathParams = /** @class */ (function (_super) {
    __extends(PeopleContactGroupsMembersModifyPathParams, _super);
    function PeopleContactGroupsMembersModifyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceName" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsMembersModifyPathParams.prototype, "resourceName", void 0);
    return PeopleContactGroupsMembersModifyPathParams;
}(SpeakeasyBase));
export { PeopleContactGroupsMembersModifyPathParams };
var PeopleContactGroupsMembersModifyQueryParams = /** @class */ (function (_super) {
    __extends(PeopleContactGroupsMembersModifyQueryParams, _super);
    function PeopleContactGroupsMembersModifyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsMembersModifyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsMembersModifyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsMembersModifyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsMembersModifyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsMembersModifyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsMembersModifyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsMembersModifyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PeopleContactGroupsMembersModifyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsMembersModifyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsMembersModifyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PeopleContactGroupsMembersModifyQueryParams.prototype, "uploadProtocol", void 0);
    return PeopleContactGroupsMembersModifyQueryParams;
}(SpeakeasyBase));
export { PeopleContactGroupsMembersModifyQueryParams };
var PeopleContactGroupsMembersModifySecurity = /** @class */ (function (_super) {
    __extends(PeopleContactGroupsMembersModifySecurity, _super);
    function PeopleContactGroupsMembersModifySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeopleContactGroupsMembersModifySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeopleContactGroupsMembersModifySecurity.prototype, "oauth2c", void 0);
    return PeopleContactGroupsMembersModifySecurity;
}(SpeakeasyBase));
export { PeopleContactGroupsMembersModifySecurity };
var PeopleContactGroupsMembersModifyRequest = /** @class */ (function (_super) {
    __extends(PeopleContactGroupsMembersModifyRequest, _super);
    function PeopleContactGroupsMembersModifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeopleContactGroupsMembersModifyPathParams)
    ], PeopleContactGroupsMembersModifyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeopleContactGroupsMembersModifyQueryParams)
    ], PeopleContactGroupsMembersModifyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModifyContactGroupMembersRequest)
    ], PeopleContactGroupsMembersModifyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeopleContactGroupsMembersModifySecurity)
    ], PeopleContactGroupsMembersModifyRequest.prototype, "security", void 0);
    return PeopleContactGroupsMembersModifyRequest;
}(SpeakeasyBase));
export { PeopleContactGroupsMembersModifyRequest };
var PeopleContactGroupsMembersModifyResponse = /** @class */ (function (_super) {
    __extends(PeopleContactGroupsMembersModifyResponse, _super);
    function PeopleContactGroupsMembersModifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PeopleContactGroupsMembersModifyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ModifyContactGroupMembersResponse)
    ], PeopleContactGroupsMembersModifyResponse.prototype, "modifyContactGroupMembersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PeopleContactGroupsMembersModifyResponse.prototype, "statusCode", void 0);
    return PeopleContactGroupsMembersModifyResponse;
}(SpeakeasyBase));
export { PeopleContactGroupsMembersModifyResponse };
