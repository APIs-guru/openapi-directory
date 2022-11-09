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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var PlusPeopleListByActivityCollectionEnum;
(function (PlusPeopleListByActivityCollectionEnum) {
    PlusPeopleListByActivityCollectionEnum["Plusoners"] = "plusoners";
    PlusPeopleListByActivityCollectionEnum["Resharers"] = "resharers";
})(PlusPeopleListByActivityCollectionEnum || (PlusPeopleListByActivityCollectionEnum = {}));
var PlusPeopleListByActivityPathParams = /** @class */ (function (_super) {
    __extends(PlusPeopleListByActivityPathParams, _super);
    function PlusPeopleListByActivityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=activityId" }),
        __metadata("design:type", String)
    ], PlusPeopleListByActivityPathParams.prototype, "activityId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=collection" }),
        __metadata("design:type", String)
    ], PlusPeopleListByActivityPathParams.prototype, "collection", void 0);
    return PlusPeopleListByActivityPathParams;
}(SpeakeasyBase));
export { PlusPeopleListByActivityPathParams };
var PlusPeopleListByActivityQueryParams = /** @class */ (function (_super) {
    __extends(PlusPeopleListByActivityQueryParams, _super);
    function PlusPeopleListByActivityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PlusPeopleListByActivityQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PlusPeopleListByActivityQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PlusPeopleListByActivityQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], PlusPeopleListByActivityQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PlusPeopleListByActivityQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PlusPeopleListByActivityQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PlusPeopleListByActivityQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PlusPeopleListByActivityQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], PlusPeopleListByActivityQueryParams.prototype, "userIp", void 0);
    return PlusPeopleListByActivityQueryParams;
}(SpeakeasyBase));
export { PlusPeopleListByActivityQueryParams };
var PlusPeopleListByActivitySecurityOption1 = /** @class */ (function (_super) {
    __extends(PlusPeopleListByActivitySecurityOption1, _super);
    function PlusPeopleListByActivitySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusPeopleListByActivitySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusPeopleListByActivitySecurityOption1.prototype, "oauth2c", void 0);
    return PlusPeopleListByActivitySecurityOption1;
}(SpeakeasyBase));
export { PlusPeopleListByActivitySecurityOption1 };
var PlusPeopleListByActivitySecurityOption2 = /** @class */ (function (_super) {
    __extends(PlusPeopleListByActivitySecurityOption2, _super);
    function PlusPeopleListByActivitySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusPeopleListByActivitySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusPeopleListByActivitySecurityOption2.prototype, "oauth2c", void 0);
    return PlusPeopleListByActivitySecurityOption2;
}(SpeakeasyBase));
export { PlusPeopleListByActivitySecurityOption2 };
var PlusPeopleListByActivitySecurity = /** @class */ (function (_super) {
    __extends(PlusPeopleListByActivitySecurity, _super);
    function PlusPeopleListByActivitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PlusPeopleListByActivitySecurityOption1)
    ], PlusPeopleListByActivitySecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PlusPeopleListByActivitySecurityOption2)
    ], PlusPeopleListByActivitySecurity.prototype, "option2", void 0);
    return PlusPeopleListByActivitySecurity;
}(SpeakeasyBase));
export { PlusPeopleListByActivitySecurity };
var PlusPeopleListByActivityRequest = /** @class */ (function (_super) {
    __extends(PlusPeopleListByActivityRequest, _super);
    function PlusPeopleListByActivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PlusPeopleListByActivityPathParams)
    ], PlusPeopleListByActivityRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PlusPeopleListByActivityQueryParams)
    ], PlusPeopleListByActivityRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PlusPeopleListByActivitySecurity)
    ], PlusPeopleListByActivityRequest.prototype, "security", void 0);
    return PlusPeopleListByActivityRequest;
}(SpeakeasyBase));
export { PlusPeopleListByActivityRequest };
var PlusPeopleListByActivityResponse = /** @class */ (function (_super) {
    __extends(PlusPeopleListByActivityResponse, _super);
    function PlusPeopleListByActivityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PlusPeopleListByActivityResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PeopleFeed)
    ], PlusPeopleListByActivityResponse.prototype, "peopleFeed", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PlusPeopleListByActivityResponse.prototype, "statusCode", void 0);
    return PlusPeopleListByActivityResponse;
}(SpeakeasyBase));
export { PlusPeopleListByActivityResponse };
