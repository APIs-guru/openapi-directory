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
export var PeoplePeopleGetBatchGetSourcesEnum;
(function (PeoplePeopleGetBatchGetSourcesEnum) {
    PeoplePeopleGetBatchGetSourcesEnum["ReadSourceTypeUnspecified"] = "READ_SOURCE_TYPE_UNSPECIFIED";
    PeoplePeopleGetBatchGetSourcesEnum["ReadSourceTypeProfile"] = "READ_SOURCE_TYPE_PROFILE";
    PeoplePeopleGetBatchGetSourcesEnum["ReadSourceTypeContact"] = "READ_SOURCE_TYPE_CONTACT";
    PeoplePeopleGetBatchGetSourcesEnum["ReadSourceTypeDomainContact"] = "READ_SOURCE_TYPE_DOMAIN_CONTACT";
})(PeoplePeopleGetBatchGetSourcesEnum || (PeoplePeopleGetBatchGetSourcesEnum = {}));
var PeoplePeopleGetBatchGetQueryParams = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetBatchGetQueryParams, _super);
    function PeoplePeopleGetBatchGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetBatchGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetBatchGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetBatchGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetBatchGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetBatchGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetBatchGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetBatchGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=personFields" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetBatchGetQueryParams.prototype, "personFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PeoplePeopleGetBatchGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetBatchGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestMask.includeField" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetBatchGetQueryParams.prototype, "requestMaskIncludeField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceNames" }),
        __metadata("design:type", Array)
    ], PeoplePeopleGetBatchGetQueryParams.prototype, "resourceNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sources" }),
        __metadata("design:type", Array)
    ], PeoplePeopleGetBatchGetQueryParams.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetBatchGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PeoplePeopleGetBatchGetQueryParams.prototype, "uploadProtocol", void 0);
    return PeoplePeopleGetBatchGetQueryParams;
}(SpeakeasyBase));
export { PeoplePeopleGetBatchGetQueryParams };
var PeoplePeopleGetBatchGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetBatchGetSecurityOption1, _super);
    function PeoplePeopleGetBatchGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetBatchGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetBatchGetSecurityOption1.prototype, "oauth2c", void 0);
    return PeoplePeopleGetBatchGetSecurityOption1;
}(SpeakeasyBase));
export { PeoplePeopleGetBatchGetSecurityOption1 };
var PeoplePeopleGetBatchGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetBatchGetSecurityOption2, _super);
    function PeoplePeopleGetBatchGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetBatchGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetBatchGetSecurityOption2.prototype, "oauth2c", void 0);
    return PeoplePeopleGetBatchGetSecurityOption2;
}(SpeakeasyBase));
export { PeoplePeopleGetBatchGetSecurityOption2 };
var PeoplePeopleGetBatchGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetBatchGetSecurityOption3, _super);
    function PeoplePeopleGetBatchGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetBatchGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetBatchGetSecurityOption3.prototype, "oauth2c", void 0);
    return PeoplePeopleGetBatchGetSecurityOption3;
}(SpeakeasyBase));
export { PeoplePeopleGetBatchGetSecurityOption3 };
var PeoplePeopleGetBatchGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetBatchGetSecurityOption4, _super);
    function PeoplePeopleGetBatchGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetBatchGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetBatchGetSecurityOption4.prototype, "oauth2c", void 0);
    return PeoplePeopleGetBatchGetSecurityOption4;
}(SpeakeasyBase));
export { PeoplePeopleGetBatchGetSecurityOption4 };
var PeoplePeopleGetBatchGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetBatchGetSecurityOption5, _super);
    function PeoplePeopleGetBatchGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetBatchGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetBatchGetSecurityOption5.prototype, "oauth2c", void 0);
    return PeoplePeopleGetBatchGetSecurityOption5;
}(SpeakeasyBase));
export { PeoplePeopleGetBatchGetSecurityOption5 };
var PeoplePeopleGetBatchGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetBatchGetSecurityOption6, _super);
    function PeoplePeopleGetBatchGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetBatchGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetBatchGetSecurityOption6.prototype, "oauth2c", void 0);
    return PeoplePeopleGetBatchGetSecurityOption6;
}(SpeakeasyBase));
export { PeoplePeopleGetBatchGetSecurityOption6 };
var PeoplePeopleGetBatchGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetBatchGetSecurityOption7, _super);
    function PeoplePeopleGetBatchGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetBatchGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetBatchGetSecurityOption7.prototype, "oauth2c", void 0);
    return PeoplePeopleGetBatchGetSecurityOption7;
}(SpeakeasyBase));
export { PeoplePeopleGetBatchGetSecurityOption7 };
var PeoplePeopleGetBatchGetSecurityOption8 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetBatchGetSecurityOption8, _super);
    function PeoplePeopleGetBatchGetSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetBatchGetSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetBatchGetSecurityOption8.prototype, "oauth2c", void 0);
    return PeoplePeopleGetBatchGetSecurityOption8;
}(SpeakeasyBase));
export { PeoplePeopleGetBatchGetSecurityOption8 };
var PeoplePeopleGetBatchGetSecurityOption9 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetBatchGetSecurityOption9, _super);
    function PeoplePeopleGetBatchGetSecurityOption9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetBatchGetSecurityOption9.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetBatchGetSecurityOption9.prototype, "oauth2c", void 0);
    return PeoplePeopleGetBatchGetSecurityOption9;
}(SpeakeasyBase));
export { PeoplePeopleGetBatchGetSecurityOption9 };
var PeoplePeopleGetBatchGetSecurityOption10 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetBatchGetSecurityOption10, _super);
    function PeoplePeopleGetBatchGetSecurityOption10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetBatchGetSecurityOption10.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetBatchGetSecurityOption10.prototype, "oauth2c", void 0);
    return PeoplePeopleGetBatchGetSecurityOption10;
}(SpeakeasyBase));
export { PeoplePeopleGetBatchGetSecurityOption10 };
var PeoplePeopleGetBatchGetSecurityOption11 = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetBatchGetSecurityOption11, _super);
    function PeoplePeopleGetBatchGetSecurityOption11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleGetBatchGetSecurityOption11.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleGetBatchGetSecurityOption11.prototype, "oauth2c", void 0);
    return PeoplePeopleGetBatchGetSecurityOption11;
}(SpeakeasyBase));
export { PeoplePeopleGetBatchGetSecurityOption11 };
var PeoplePeopleGetBatchGetSecurity = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetBatchGetSecurity, _super);
    function PeoplePeopleGetBatchGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetBatchGetSecurityOption1)
    ], PeoplePeopleGetBatchGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetBatchGetSecurityOption2)
    ], PeoplePeopleGetBatchGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetBatchGetSecurityOption3)
    ], PeoplePeopleGetBatchGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetBatchGetSecurityOption4)
    ], PeoplePeopleGetBatchGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetBatchGetSecurityOption5)
    ], PeoplePeopleGetBatchGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetBatchGetSecurityOption6)
    ], PeoplePeopleGetBatchGetSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetBatchGetSecurityOption7)
    ], PeoplePeopleGetBatchGetSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetBatchGetSecurityOption8)
    ], PeoplePeopleGetBatchGetSecurity.prototype, "option8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetBatchGetSecurityOption9)
    ], PeoplePeopleGetBatchGetSecurity.prototype, "option9", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetBatchGetSecurityOption10)
    ], PeoplePeopleGetBatchGetSecurity.prototype, "option10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleGetBatchGetSecurityOption11)
    ], PeoplePeopleGetBatchGetSecurity.prototype, "option11", void 0);
    return PeoplePeopleGetBatchGetSecurity;
}(SpeakeasyBase));
export { PeoplePeopleGetBatchGetSecurity };
var PeoplePeopleGetBatchGetRequest = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetBatchGetRequest, _super);
    function PeoplePeopleGetBatchGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleGetBatchGetQueryParams)
    ], PeoplePeopleGetBatchGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleGetBatchGetSecurity)
    ], PeoplePeopleGetBatchGetRequest.prototype, "security", void 0);
    return PeoplePeopleGetBatchGetRequest;
}(SpeakeasyBase));
export { PeoplePeopleGetBatchGetRequest };
var PeoplePeopleGetBatchGetResponse = /** @class */ (function (_super) {
    __extends(PeoplePeopleGetBatchGetResponse, _super);
    function PeoplePeopleGetBatchGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PeoplePeopleGetBatchGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetPeopleResponse)
    ], PeoplePeopleGetBatchGetResponse.prototype, "getPeopleResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PeoplePeopleGetBatchGetResponse.prototype, "statusCode", void 0);
    return PeoplePeopleGetBatchGetResponse;
}(SpeakeasyBase));
export { PeoplePeopleGetBatchGetResponse };
