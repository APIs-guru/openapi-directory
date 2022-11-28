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
export var PlusPeopleListCollectionEnum;
(function (PlusPeopleListCollectionEnum) {
    PlusPeopleListCollectionEnum["Connected"] = "connected";
    PlusPeopleListCollectionEnum["Visible"] = "visible";
})(PlusPeopleListCollectionEnum || (PlusPeopleListCollectionEnum = {}));
var PlusPeopleListPathParams = /** @class */ (function (_super) {
    __extends(PlusPeopleListPathParams, _super);
    function PlusPeopleListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection" }),
        __metadata("design:type", String)
    ], PlusPeopleListPathParams.prototype, "collection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], PlusPeopleListPathParams.prototype, "userId", void 0);
    return PlusPeopleListPathParams;
}(SpeakeasyBase));
export { PlusPeopleListPathParams };
export var PlusPeopleListOrderByEnum;
(function (PlusPeopleListOrderByEnum) {
    PlusPeopleListOrderByEnum["Alphabetical"] = "alphabetical";
    PlusPeopleListOrderByEnum["Best"] = "best";
})(PlusPeopleListOrderByEnum || (PlusPeopleListOrderByEnum = {}));
var PlusPeopleListQueryParams = /** @class */ (function (_super) {
    __extends(PlusPeopleListQueryParams, _super);
    function PlusPeopleListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PlusPeopleListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PlusPeopleListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PlusPeopleListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], PlusPeopleListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PlusPeopleListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], PlusPeopleListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PlusPeopleListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PlusPeopleListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PlusPeopleListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], PlusPeopleListQueryParams.prototype, "userIp", void 0);
    return PlusPeopleListQueryParams;
}(SpeakeasyBase));
export { PlusPeopleListQueryParams };
var PlusPeopleListSecurityOption1 = /** @class */ (function (_super) {
    __extends(PlusPeopleListSecurityOption1, _super);
    function PlusPeopleListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusPeopleListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusPeopleListSecurityOption1.prototype, "oauth2c", void 0);
    return PlusPeopleListSecurityOption1;
}(SpeakeasyBase));
export { PlusPeopleListSecurityOption1 };
var PlusPeopleListSecurityOption2 = /** @class */ (function (_super) {
    __extends(PlusPeopleListSecurityOption2, _super);
    function PlusPeopleListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusPeopleListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusPeopleListSecurityOption2.prototype, "oauth2c", void 0);
    return PlusPeopleListSecurityOption2;
}(SpeakeasyBase));
export { PlusPeopleListSecurityOption2 };
var PlusPeopleListSecurity = /** @class */ (function (_super) {
    __extends(PlusPeopleListSecurity, _super);
    function PlusPeopleListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PlusPeopleListSecurityOption1)
    ], PlusPeopleListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PlusPeopleListSecurityOption2)
    ], PlusPeopleListSecurity.prototype, "option2", void 0);
    return PlusPeopleListSecurity;
}(SpeakeasyBase));
export { PlusPeopleListSecurity };
var PlusPeopleListRequest = /** @class */ (function (_super) {
    __extends(PlusPeopleListRequest, _super);
    function PlusPeopleListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlusPeopleListPathParams)
    ], PlusPeopleListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlusPeopleListQueryParams)
    ], PlusPeopleListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlusPeopleListSecurity)
    ], PlusPeopleListRequest.prototype, "security", void 0);
    return PlusPeopleListRequest;
}(SpeakeasyBase));
export { PlusPeopleListRequest };
var PlusPeopleListResponse = /** @class */ (function (_super) {
    __extends(PlusPeopleListResponse, _super);
    function PlusPeopleListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlusPeopleListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PeopleFeed)
    ], PlusPeopleListResponse.prototype, "peopleFeed", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlusPeopleListResponse.prototype, "statusCode", void 0);
    return PlusPeopleListResponse;
}(SpeakeasyBase));
export { PlusPeopleListResponse };
