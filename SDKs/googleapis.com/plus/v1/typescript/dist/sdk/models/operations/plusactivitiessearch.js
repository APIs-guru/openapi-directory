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
export var PlusActivitiesSearchOrderByEnum;
(function (PlusActivitiesSearchOrderByEnum) {
    PlusActivitiesSearchOrderByEnum["Best"] = "best";
    PlusActivitiesSearchOrderByEnum["Recent"] = "recent";
})(PlusActivitiesSearchOrderByEnum || (PlusActivitiesSearchOrderByEnum = {}));
var PlusActivitiesSearchQueryParams = /** @class */ (function (_super) {
    __extends(PlusActivitiesSearchQueryParams, _super);
    function PlusActivitiesSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PlusActivitiesSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PlusActivitiesSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PlusActivitiesSearchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], PlusActivitiesSearchQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], PlusActivitiesSearchQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PlusActivitiesSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], PlusActivitiesSearchQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PlusActivitiesSearchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PlusActivitiesSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], PlusActivitiesSearchQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PlusActivitiesSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], PlusActivitiesSearchQueryParams.prototype, "userIp", void 0);
    return PlusActivitiesSearchQueryParams;
}(SpeakeasyBase));
export { PlusActivitiesSearchQueryParams };
var PlusActivitiesSearchSecurityOption1 = /** @class */ (function (_super) {
    __extends(PlusActivitiesSearchSecurityOption1, _super);
    function PlusActivitiesSearchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusActivitiesSearchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusActivitiesSearchSecurityOption1.prototype, "oauth2c", void 0);
    return PlusActivitiesSearchSecurityOption1;
}(SpeakeasyBase));
export { PlusActivitiesSearchSecurityOption1 };
var PlusActivitiesSearchSecurityOption2 = /** @class */ (function (_super) {
    __extends(PlusActivitiesSearchSecurityOption2, _super);
    function PlusActivitiesSearchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusActivitiesSearchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusActivitiesSearchSecurityOption2.prototype, "oauth2c", void 0);
    return PlusActivitiesSearchSecurityOption2;
}(SpeakeasyBase));
export { PlusActivitiesSearchSecurityOption2 };
var PlusActivitiesSearchSecurity = /** @class */ (function (_super) {
    __extends(PlusActivitiesSearchSecurity, _super);
    function PlusActivitiesSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PlusActivitiesSearchSecurityOption1)
    ], PlusActivitiesSearchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PlusActivitiesSearchSecurityOption2)
    ], PlusActivitiesSearchSecurity.prototype, "option2", void 0);
    return PlusActivitiesSearchSecurity;
}(SpeakeasyBase));
export { PlusActivitiesSearchSecurity };
var PlusActivitiesSearchRequest = /** @class */ (function (_super) {
    __extends(PlusActivitiesSearchRequest, _super);
    function PlusActivitiesSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlusActivitiesSearchQueryParams)
    ], PlusActivitiesSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlusActivitiesSearchSecurity)
    ], PlusActivitiesSearchRequest.prototype, "security", void 0);
    return PlusActivitiesSearchRequest;
}(SpeakeasyBase));
export { PlusActivitiesSearchRequest };
var PlusActivitiesSearchResponse = /** @class */ (function (_super) {
    __extends(PlusActivitiesSearchResponse, _super);
    function PlusActivitiesSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ActivityFeed)
    ], PlusActivitiesSearchResponse.prototype, "activityFeed", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlusActivitiesSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlusActivitiesSearchResponse.prototype, "statusCode", void 0);
    return PlusActivitiesSearchResponse;
}(SpeakeasyBase));
export { PlusActivitiesSearchResponse };
