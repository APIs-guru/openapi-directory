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
var PeoplePeopleUpdateContactPathParams = /** @class */ (function (_super) {
    __extends(PeoplePeopleUpdateContactPathParams, _super);
    function PeoplePeopleUpdateContactPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceName" }),
        __metadata("design:type", String)
    ], PeoplePeopleUpdateContactPathParams.prototype, "resourceName", void 0);
    return PeoplePeopleUpdateContactPathParams;
}(SpeakeasyBase));
export { PeoplePeopleUpdateContactPathParams };
export var PeoplePeopleUpdateContactSourcesEnum;
(function (PeoplePeopleUpdateContactSourcesEnum) {
    PeoplePeopleUpdateContactSourcesEnum["ReadSourceTypeUnspecified"] = "READ_SOURCE_TYPE_UNSPECIFIED";
    PeoplePeopleUpdateContactSourcesEnum["ReadSourceTypeProfile"] = "READ_SOURCE_TYPE_PROFILE";
    PeoplePeopleUpdateContactSourcesEnum["ReadSourceTypeContact"] = "READ_SOURCE_TYPE_CONTACT";
    PeoplePeopleUpdateContactSourcesEnum["ReadSourceTypeDomainContact"] = "READ_SOURCE_TYPE_DOMAIN_CONTACT";
})(PeoplePeopleUpdateContactSourcesEnum || (PeoplePeopleUpdateContactSourcesEnum = {}));
var PeoplePeopleUpdateContactQueryParams = /** @class */ (function (_super) {
    __extends(PeoplePeopleUpdateContactQueryParams, _super);
    function PeoplePeopleUpdateContactQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PeoplePeopleUpdateContactQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleUpdateContactQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PeoplePeopleUpdateContactQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PeoplePeopleUpdateContactQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PeoplePeopleUpdateContactQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PeoplePeopleUpdateContactQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleUpdateContactQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=personFields" }),
        __metadata("design:type", String)
    ], PeoplePeopleUpdateContactQueryParams.prototype, "personFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PeoplePeopleUpdateContactQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PeoplePeopleUpdateContactQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sources" }),
        __metadata("design:type", Array)
    ], PeoplePeopleUpdateContactQueryParams.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatePersonFields" }),
        __metadata("design:type", String)
    ], PeoplePeopleUpdateContactQueryParams.prototype, "updatePersonFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PeoplePeopleUpdateContactQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PeoplePeopleUpdateContactQueryParams.prototype, "uploadProtocol", void 0);
    return PeoplePeopleUpdateContactQueryParams;
}(SpeakeasyBase));
export { PeoplePeopleUpdateContactQueryParams };
var PeoplePeopleUpdateContactSecurity = /** @class */ (function (_super) {
    __extends(PeoplePeopleUpdateContactSecurity, _super);
    function PeoplePeopleUpdateContactSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleUpdateContactSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleUpdateContactSecurity.prototype, "oauth2c", void 0);
    return PeoplePeopleUpdateContactSecurity;
}(SpeakeasyBase));
export { PeoplePeopleUpdateContactSecurity };
var PeoplePeopleUpdateContactRequest = /** @class */ (function (_super) {
    __extends(PeoplePeopleUpdateContactRequest, _super);
    function PeoplePeopleUpdateContactRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleUpdateContactPathParams)
    ], PeoplePeopleUpdateContactRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleUpdateContactQueryParams)
    ], PeoplePeopleUpdateContactRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PersonInput)
    ], PeoplePeopleUpdateContactRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleUpdateContactSecurity)
    ], PeoplePeopleUpdateContactRequest.prototype, "security", void 0);
    return PeoplePeopleUpdateContactRequest;
}(SpeakeasyBase));
export { PeoplePeopleUpdateContactRequest };
var PeoplePeopleUpdateContactResponse = /** @class */ (function (_super) {
    __extends(PeoplePeopleUpdateContactResponse, _super);
    function PeoplePeopleUpdateContactResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PeoplePeopleUpdateContactResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Person)
    ], PeoplePeopleUpdateContactResponse.prototype, "person", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PeoplePeopleUpdateContactResponse.prototype, "statusCode", void 0);
    return PeoplePeopleUpdateContactResponse;
}(SpeakeasyBase));
export { PeoplePeopleUpdateContactResponse };
