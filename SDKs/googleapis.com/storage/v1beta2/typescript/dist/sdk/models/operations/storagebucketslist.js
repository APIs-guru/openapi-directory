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
export var StorageBucketsListProjectionEnum;
(function (StorageBucketsListProjectionEnum) {
    StorageBucketsListProjectionEnum["Full"] = "full";
    StorageBucketsListProjectionEnum["NoAcl"] = "noAcl";
})(StorageBucketsListProjectionEnum || (StorageBucketsListProjectionEnum = {}));
var StorageBucketsListQueryParams = /** @class */ (function (_super) {
    __extends(StorageBucketsListQueryParams, _super);
    function StorageBucketsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageBucketsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageBucketsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageBucketsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], StorageBucketsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageBucketsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], StorageBucketsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageBucketsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=project" }),
        __metadata("design:type", String)
    ], StorageBucketsListQueryParams.prototype, "project", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], StorageBucketsListQueryParams.prototype, "projection", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageBucketsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageBucketsListQueryParams.prototype, "userIp", void 0);
    return StorageBucketsListQueryParams;
}(SpeakeasyBase));
export { StorageBucketsListQueryParams };
var StorageBucketsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageBucketsListSecurityOption1, _super);
    function StorageBucketsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsListSecurityOption1.prototype, "oauth2c", void 0);
    return StorageBucketsListSecurityOption1;
}(SpeakeasyBase));
export { StorageBucketsListSecurityOption1 };
var StorageBucketsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageBucketsListSecurityOption2, _super);
    function StorageBucketsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsListSecurityOption2.prototype, "oauth2c", void 0);
    return StorageBucketsListSecurityOption2;
}(SpeakeasyBase));
export { StorageBucketsListSecurityOption2 };
var StorageBucketsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageBucketsListSecurityOption3, _super);
    function StorageBucketsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsListSecurityOption3.prototype, "oauth2c", void 0);
    return StorageBucketsListSecurityOption3;
}(SpeakeasyBase));
export { StorageBucketsListSecurityOption3 };
var StorageBucketsListSecurity = /** @class */ (function (_super) {
    __extends(StorageBucketsListSecurity, _super);
    function StorageBucketsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsListSecurityOption1)
    ], StorageBucketsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsListSecurityOption2)
    ], StorageBucketsListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsListSecurityOption3)
    ], StorageBucketsListSecurity.prototype, "option3", void 0);
    return StorageBucketsListSecurity;
}(SpeakeasyBase));
export { StorageBucketsListSecurity };
var StorageBucketsListRequest = /** @class */ (function (_super) {
    __extends(StorageBucketsListRequest, _super);
    function StorageBucketsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketsListQueryParams)
    ], StorageBucketsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketsListSecurity)
    ], StorageBucketsListRequest.prototype, "security", void 0);
    return StorageBucketsListRequest;
}(SpeakeasyBase));
export { StorageBucketsListRequest };
var StorageBucketsListResponse = /** @class */ (function (_super) {
    __extends(StorageBucketsListResponse, _super);
    function StorageBucketsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Buckets)
    ], StorageBucketsListResponse.prototype, "buckets", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageBucketsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageBucketsListResponse.prototype, "statusCode", void 0);
    return StorageBucketsListResponse;
}(SpeakeasyBase));
export { StorageBucketsListResponse };
