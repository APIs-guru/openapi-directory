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
export var PeoplePeopleCreateContactSourcesEnum;
(function (PeoplePeopleCreateContactSourcesEnum) {
    PeoplePeopleCreateContactSourcesEnum["ReadSourceTypeUnspecified"] = "READ_SOURCE_TYPE_UNSPECIFIED";
    PeoplePeopleCreateContactSourcesEnum["ReadSourceTypeProfile"] = "READ_SOURCE_TYPE_PROFILE";
    PeoplePeopleCreateContactSourcesEnum["ReadSourceTypeContact"] = "READ_SOURCE_TYPE_CONTACT";
    PeoplePeopleCreateContactSourcesEnum["ReadSourceTypeDomainContact"] = "READ_SOURCE_TYPE_DOMAIN_CONTACT";
})(PeoplePeopleCreateContactSourcesEnum || (PeoplePeopleCreateContactSourcesEnum = {}));
var PeoplePeopleCreateContactQueryParams = /** @class */ (function (_super) {
    __extends(PeoplePeopleCreateContactQueryParams, _super);
    function PeoplePeopleCreateContactQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PeoplePeopleCreateContactQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleCreateContactQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PeoplePeopleCreateContactQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PeoplePeopleCreateContactQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PeoplePeopleCreateContactQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PeoplePeopleCreateContactQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleCreateContactQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=personFields" }),
        __metadata("design:type", String)
    ], PeoplePeopleCreateContactQueryParams.prototype, "personFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PeoplePeopleCreateContactQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PeoplePeopleCreateContactQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sources" }),
        __metadata("design:type", Array)
    ], PeoplePeopleCreateContactQueryParams.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PeoplePeopleCreateContactQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PeoplePeopleCreateContactQueryParams.prototype, "uploadProtocol", void 0);
    return PeoplePeopleCreateContactQueryParams;
}(SpeakeasyBase));
export { PeoplePeopleCreateContactQueryParams };
var PeoplePeopleCreateContactSecurity = /** @class */ (function (_super) {
    __extends(PeoplePeopleCreateContactSecurity, _super);
    function PeoplePeopleCreateContactSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleCreateContactSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleCreateContactSecurity.prototype, "oauth2c", void 0);
    return PeoplePeopleCreateContactSecurity;
}(SpeakeasyBase));
export { PeoplePeopleCreateContactSecurity };
var PeoplePeopleCreateContactRequest = /** @class */ (function (_super) {
    __extends(PeoplePeopleCreateContactRequest, _super);
    function PeoplePeopleCreateContactRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleCreateContactQueryParams)
    ], PeoplePeopleCreateContactRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PersonInput)
    ], PeoplePeopleCreateContactRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleCreateContactSecurity)
    ], PeoplePeopleCreateContactRequest.prototype, "security", void 0);
    return PeoplePeopleCreateContactRequest;
}(SpeakeasyBase));
export { PeoplePeopleCreateContactRequest };
var PeoplePeopleCreateContactResponse = /** @class */ (function (_super) {
    __extends(PeoplePeopleCreateContactResponse, _super);
    function PeoplePeopleCreateContactResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PeoplePeopleCreateContactResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Person)
    ], PeoplePeopleCreateContactResponse.prototype, "person", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PeoplePeopleCreateContactResponse.prototype, "statusCode", void 0);
    return PeoplePeopleCreateContactResponse;
}(SpeakeasyBase));
export { PeoplePeopleCreateContactResponse };
