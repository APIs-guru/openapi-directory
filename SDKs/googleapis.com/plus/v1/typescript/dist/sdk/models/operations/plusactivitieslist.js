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
export var PlusActivitiesListCollectionEnum;
(function (PlusActivitiesListCollectionEnum) {
    PlusActivitiesListCollectionEnum["Public"] = "public";
})(PlusActivitiesListCollectionEnum || (PlusActivitiesListCollectionEnum = {}));
var PlusActivitiesListPathParams = /** @class */ (function (_super) {
    __extends(PlusActivitiesListPathParams, _super);
    function PlusActivitiesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=collection" }),
        __metadata("design:type", String)
    ], PlusActivitiesListPathParams.prototype, "collection", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], PlusActivitiesListPathParams.prototype, "userId", void 0);
    return PlusActivitiesListPathParams;
}(SpeakeasyBase));
export { PlusActivitiesListPathParams };
var PlusActivitiesListQueryParams = /** @class */ (function (_super) {
    __extends(PlusActivitiesListQueryParams, _super);
    function PlusActivitiesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PlusActivitiesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PlusActivitiesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PlusActivitiesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], PlusActivitiesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PlusActivitiesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PlusActivitiesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PlusActivitiesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PlusActivitiesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], PlusActivitiesListQueryParams.prototype, "userIp", void 0);
    return PlusActivitiesListQueryParams;
}(SpeakeasyBase));
export { PlusActivitiesListQueryParams };
var PlusActivitiesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(PlusActivitiesListSecurityOption1, _super);
    function PlusActivitiesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusActivitiesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusActivitiesListSecurityOption1.prototype, "oauth2c", void 0);
    return PlusActivitiesListSecurityOption1;
}(SpeakeasyBase));
export { PlusActivitiesListSecurityOption1 };
var PlusActivitiesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(PlusActivitiesListSecurityOption2, _super);
    function PlusActivitiesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusActivitiesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusActivitiesListSecurityOption2.prototype, "oauth2c", void 0);
    return PlusActivitiesListSecurityOption2;
}(SpeakeasyBase));
export { PlusActivitiesListSecurityOption2 };
var PlusActivitiesListSecurity = /** @class */ (function (_super) {
    __extends(PlusActivitiesListSecurity, _super);
    function PlusActivitiesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PlusActivitiesListSecurityOption1)
    ], PlusActivitiesListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PlusActivitiesListSecurityOption2)
    ], PlusActivitiesListSecurity.prototype, "option2", void 0);
    return PlusActivitiesListSecurity;
}(SpeakeasyBase));
export { PlusActivitiesListSecurity };
var PlusActivitiesListRequest = /** @class */ (function (_super) {
    __extends(PlusActivitiesListRequest, _super);
    function PlusActivitiesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PlusActivitiesListPathParams)
    ], PlusActivitiesListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PlusActivitiesListQueryParams)
    ], PlusActivitiesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PlusActivitiesListSecurity)
    ], PlusActivitiesListRequest.prototype, "security", void 0);
    return PlusActivitiesListRequest;
}(SpeakeasyBase));
export { PlusActivitiesListRequest };
var PlusActivitiesListResponse = /** @class */ (function (_super) {
    __extends(PlusActivitiesListResponse, _super);
    function PlusActivitiesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ActivityFeed)
    ], PlusActivitiesListResponse.prototype, "activityFeed", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PlusActivitiesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PlusActivitiesListResponse.prototype, "statusCode", void 0);
    return PlusActivitiesListResponse;
}(SpeakeasyBase));
export { PlusActivitiesListResponse };
