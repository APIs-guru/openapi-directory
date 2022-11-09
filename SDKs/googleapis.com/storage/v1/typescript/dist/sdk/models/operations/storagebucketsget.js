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
var StorageBucketsGetPathParams = /** @class */ (function (_super) {
    __extends(StorageBucketsGetPathParams, _super);
    function StorageBucketsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageBucketsGetPathParams.prototype, "bucket", void 0);
    return StorageBucketsGetPathParams;
}(SpeakeasyBase));
export { StorageBucketsGetPathParams };
export var StorageBucketsGetProjectionEnum;
(function (StorageBucketsGetProjectionEnum) {
    StorageBucketsGetProjectionEnum["Full"] = "full";
    StorageBucketsGetProjectionEnum["NoAcl"] = "noAcl";
})(StorageBucketsGetProjectionEnum || (StorageBucketsGetProjectionEnum = {}));
var StorageBucketsGetQueryParams = /** @class */ (function (_super) {
    __extends(StorageBucketsGetQueryParams, _super);
    function StorageBucketsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageBucketsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageBucketsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" }),
        __metadata("design:type", String)
    ], StorageBucketsGetQueryParams.prototype, "ifMetagenerationMatch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageBucketsGetQueryParams.prototype, "ifMetagenerationNotMatch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageBucketsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageBucketsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageBucketsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], StorageBucketsGetQueryParams.prototype, "projection", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageBucketsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageBucketsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageBucketsGetQueryParams.prototype, "userIp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageBucketsGetQueryParams.prototype, "userProject", void 0);
    return StorageBucketsGetQueryParams;
}(SpeakeasyBase));
export { StorageBucketsGetQueryParams };
var StorageBucketsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageBucketsGetSecurityOption1, _super);
    function StorageBucketsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsGetSecurityOption1.prototype, "oauth2c", void 0);
    return StorageBucketsGetSecurityOption1;
}(SpeakeasyBase));
export { StorageBucketsGetSecurityOption1 };
var StorageBucketsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageBucketsGetSecurityOption2, _super);
    function StorageBucketsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsGetSecurityOption2.prototype, "oauth2c", void 0);
    return StorageBucketsGetSecurityOption2;
}(SpeakeasyBase));
export { StorageBucketsGetSecurityOption2 };
var StorageBucketsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageBucketsGetSecurityOption3, _super);
    function StorageBucketsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsGetSecurityOption3.prototype, "oauth2c", void 0);
    return StorageBucketsGetSecurityOption3;
}(SpeakeasyBase));
export { StorageBucketsGetSecurityOption3 };
var StorageBucketsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(StorageBucketsGetSecurityOption4, _super);
    function StorageBucketsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsGetSecurityOption4.prototype, "oauth2c", void 0);
    return StorageBucketsGetSecurityOption4;
}(SpeakeasyBase));
export { StorageBucketsGetSecurityOption4 };
var StorageBucketsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(StorageBucketsGetSecurityOption5, _super);
    function StorageBucketsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsGetSecurityOption5.prototype, "oauth2c", void 0);
    return StorageBucketsGetSecurityOption5;
}(SpeakeasyBase));
export { StorageBucketsGetSecurityOption5 };
var StorageBucketsGetSecurity = /** @class */ (function (_super) {
    __extends(StorageBucketsGetSecurity, _super);
    function StorageBucketsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsGetSecurityOption1)
    ], StorageBucketsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsGetSecurityOption2)
    ], StorageBucketsGetSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsGetSecurityOption3)
    ], StorageBucketsGetSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsGetSecurityOption4)
    ], StorageBucketsGetSecurity.prototype, "option4", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsGetSecurityOption5)
    ], StorageBucketsGetSecurity.prototype, "option5", void 0);
    return StorageBucketsGetSecurity;
}(SpeakeasyBase));
export { StorageBucketsGetSecurity };
var StorageBucketsGetRequest = /** @class */ (function (_super) {
    __extends(StorageBucketsGetRequest, _super);
    function StorageBucketsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketsGetPathParams)
    ], StorageBucketsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketsGetQueryParams)
    ], StorageBucketsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageBucketsGetSecurity)
    ], StorageBucketsGetRequest.prototype, "security", void 0);
    return StorageBucketsGetRequest;
}(SpeakeasyBase));
export { StorageBucketsGetRequest };
var StorageBucketsGetResponse = /** @class */ (function (_super) {
    __extends(StorageBucketsGetResponse, _super);
    function StorageBucketsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Bucket)
    ], StorageBucketsGetResponse.prototype, "bucket", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageBucketsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageBucketsGetResponse.prototype, "statusCode", void 0);
    return StorageBucketsGetResponse;
}(SpeakeasyBase));
export { StorageBucketsGetResponse };
