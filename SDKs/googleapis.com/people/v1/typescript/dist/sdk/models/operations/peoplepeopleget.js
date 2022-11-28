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
var PeoplePeopleGetPathParams = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetPathParams, _super);
    function PeoplePeopleGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceName" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetPathParams.prototype, "resourceName", void 0);
    return PeoplePeopleGetPathParams;
}(SpeakeasyBase));
export { PeoplePeopleGetPathParams };
export var PeoplePeopleGetSourcesEnum;
(function (PeoplePeopleGetSourcesEnum) {
    PeoplePeopleGetSourcesEnum["ReadSourceTypeUnspecified"] = "READ_SOURCE_TYPE_UNSPECIFIED";
    PeoplePeopleGetSourcesEnum["ReadSourceTypeProfile"] = "READ_SOURCE_TYPE_PROFILE";
    PeoplePeopleGetSourcesEnum["ReadSourceTypeContact"] = "READ_SOURCE_TYPE_CONTACT";
    PeoplePeopleGetSourcesEnum["ReadSourceTypeDomainContact"] = "READ_SOURCE_TYPE_DOMAIN_CONTACT";
})(PeoplePeopleGetSourcesEnum || (PeoplePeopleGetSourcesEnum = {}));
var PeoplePeopleGetQueryParams = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetQueryParams, _super);
    function PeoplePeopleGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=personFields" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetQueryParams.prototype, "personFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PeoplePeopleGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestMask.includeField" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetQueryParams.prototype, "requestMaskIncludeField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sources" }),
        __metadata("design:type", Array)
    ], PeoplePeopleGetQueryParams.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetQueryParams.prototype, "uploadProtocol", void 0);
    return PeoplePeopleGetQueryParams;
}(SpeakeasyBase));
export { PeoplePeopleGetQueryParams };
var PeoplePeopleGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetSecurityOption1, _super);
    function PeoplePeopleGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetSecurityOption1.prototype, "oauth2c", void 0);
    return PeoplePeopleGetSecurityOption1;
}(SpeakeasyBase));
export { PeoplePeopleGetSecurityOption1 };
var PeoplePeopleGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetSecurityOption2, _super);
    function PeoplePeopleGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetSecurityOption2.prototype, "oauth2c", void 0);
    return PeoplePeopleGetSecurityOption2;
}(SpeakeasyBase));
export { PeoplePeopleGetSecurityOption2 };
var PeoplePeopleGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetSecurityOption3, _super);
    function PeoplePeopleGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetSecurityOption3.prototype, "oauth2c", void 0);
    return PeoplePeopleGetSecurityOption3;
}(SpeakeasyBase));
export { PeoplePeopleGetSecurityOption3 };
var PeoplePeopleGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetSecurityOption4, _super);
    function PeoplePeopleGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetSecurityOption4.prototype, "oauth2c", void 0);
    return PeoplePeopleGetSecurityOption4;
}(SpeakeasyBase));
export { PeoplePeopleGetSecurityOption4 };
var PeoplePeopleGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetSecurityOption5, _super);
    function PeoplePeopleGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetSecurityOption5.prototype, "oauth2c", void 0);
    return PeoplePeopleGetSecurityOption5;
}(SpeakeasyBase));
export { PeoplePeopleGetSecurityOption5 };
var PeoplePeopleGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetSecurityOption6, _super);
    function PeoplePeopleGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetSecurityOption6.prototype, "oauth2c", void 0);
    return PeoplePeopleGetSecurityOption6;
}(SpeakeasyBase));
export { PeoplePeopleGetSecurityOption6 };
var PeoplePeopleGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetSecurityOption7, _super);
    function PeoplePeopleGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetSecurityOption7.prototype, "oauth2c", void 0);
    return PeoplePeopleGetSecurityOption7;
}(SpeakeasyBase));
export { PeoplePeopleGetSecurityOption7 };
var PeoplePeopleGetSecurityOption8 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetSecurityOption8, _super);
    function PeoplePeopleGetSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetSecurityOption8.prototype, "oauth2c", void 0);
    return PeoplePeopleGetSecurityOption8;
}(SpeakeasyBase));
export { PeoplePeopleGetSecurityOption8 };
var PeoplePeopleGetSecurityOption9 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetSecurityOption9, _super);
    function PeoplePeopleGetSecurityOption9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetSecurityOption9.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetSecurityOption9.prototype, "oauth2c", void 0);
    return PeoplePeopleGetSecurityOption9;
}(SpeakeasyBase));
export { PeoplePeopleGetSecurityOption9 };
var PeoplePeopleGetSecurityOption10 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetSecurityOption10, _super);
    function PeoplePeopleGetSecurityOption10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetSecurityOption10.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetSecurityOption10.prototype, "oauth2c", void 0);
    return PeoplePeopleGetSecurityOption10;
}(SpeakeasyBase));
export { PeoplePeopleGetSecurityOption10 };
var PeoplePeopleGetSecurityOption11 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetSecurityOption11, _super);
    function PeoplePeopleGetSecurityOption11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetSecurityOption11.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetSecurityOption11.prototype, "oauth2c", void 0);
    return PeoplePeopleGetSecurityOption11;
}(SpeakeasyBase));
export { PeoplePeopleGetSecurityOption11 };
var PeoplePeopleGetSecurity = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetSecurity, _super);
    function PeoplePeopleGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetSecurityOption1)
    ], PeoplePeopleGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetSecurityOption2)
    ], PeoplePeopleGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetSecurityOption3)
    ], PeoplePeopleGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetSecurityOption4)
    ], PeoplePeopleGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetSecurityOption5)
    ], PeoplePeopleGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetSecurityOption6)
    ], PeoplePeopleGetSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetSecurityOption7)
    ], PeoplePeopleGetSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetSecurityOption8)
    ], PeoplePeopleGetSecurity.prototype, "option8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetSecurityOption9)
    ], PeoplePeopleGetSecurity.prototype, "option9", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetSecurityOption10)
    ], PeoplePeopleGetSecurity.prototype, "option10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetSecurityOption11)
    ], PeoplePeopleGetSecurity.prototype, "option11", void 0);
    return PeoplePeopleGetSecurity;
}(SpeakeasyBase));
export { PeoplePeopleGetSecurity };
var PeoplePeopleGetRequest = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetRequest, _super);
    function PeoplePeopleGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleGetPathParams)
    ], PeoplePeopleGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleGetQueryParams)
    ], PeoplePeopleGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleGetSecurity)
    ], PeoplePeopleGetRequest.prototype, "security", void 0);
    return PeoplePeopleGetRequest;
}(SpeakeasyBase));
export { PeoplePeopleGetRequest };
var PeoplePeopleGetResponse = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetResponse, _super);
    function PeoplePeopleGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PeoplePeopleGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Person)
    ], PeoplePeopleGetResponse.prototype, "person", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PeoplePeopleGetResponse.prototype, "statusCode", void 0);
    return PeoplePeopleGetResponse;
}(SpeakeasyBase));
export { PeoplePeopleGetResponse };
