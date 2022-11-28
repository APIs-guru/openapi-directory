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
var StorageBucketsDeletePathParams = /** @class */ (function (_super) {
    __extends(StorageBucketsDeletePathParams, _super);
    function StorageBucketsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageBucketsDeletePathParams.prototype, "bucket", void 0);
    return StorageBucketsDeletePathParams;
}(SpeakeasyBase));
export { StorageBucketsDeletePathParams };
var StorageBucketsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(StorageBucketsDeleteQueryParams, _super);
    function StorageBucketsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageBucketsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageBucketsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" }),
        __metadata("design:type", String)
    ], StorageBucketsDeleteQueryParams.prototype, "ifMetagenerationMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageBucketsDeleteQueryParams.prototype, "ifMetagenerationNotMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageBucketsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageBucketsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageBucketsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageBucketsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageBucketsDeleteQueryParams.prototype, "userIp", void 0);
    return StorageBucketsDeleteQueryParams;
}(SpeakeasyBase));
export { StorageBucketsDeleteQueryParams };
var StorageBucketsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageBucketsDeleteSecurityOption1, _super);
    function StorageBucketsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return StorageBucketsDeleteSecurityOption1;
}(SpeakeasyBase));
export { StorageBucketsDeleteSecurityOption1 };
var StorageBucketsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageBucketsDeleteSecurityOption2, _super);
    function StorageBucketsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageBucketsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageBucketsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return StorageBucketsDeleteSecurityOption2;
}(SpeakeasyBase));
export { StorageBucketsDeleteSecurityOption2 };
var StorageBucketsDeleteSecurity = /** @class */ (function (_super) {
    __extends(StorageBucketsDeleteSecurity, _super);
    function StorageBucketsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsDeleteSecurityOption1)
    ], StorageBucketsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageBucketsDeleteSecurityOption2)
    ], StorageBucketsDeleteSecurity.prototype, "option2", void 0);
    return StorageBucketsDeleteSecurity;
}(SpeakeasyBase));
export { StorageBucketsDeleteSecurity };
var StorageBucketsDeleteRequest = /** @class */ (function (_super) {
    __extends(StorageBucketsDeleteRequest, _super);
    function StorageBucketsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageBucketsDeletePathParams)
    ], StorageBucketsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageBucketsDeleteQueryParams)
    ], StorageBucketsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageBucketsDeleteSecurity)
    ], StorageBucketsDeleteRequest.prototype, "security", void 0);
    return StorageBucketsDeleteRequest;
}(SpeakeasyBase));
export { StorageBucketsDeleteRequest };
var StorageBucketsDeleteResponse = /** @class */ (function (_super) {
    __extends(StorageBucketsDeleteResponse, _super);
    function StorageBucketsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageBucketsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageBucketsDeleteResponse.prototype, "statusCode", void 0);
    return StorageBucketsDeleteResponse;
}(SpeakeasyBase));
export { StorageBucketsDeleteResponse };
