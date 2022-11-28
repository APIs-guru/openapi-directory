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
var ReplicapoolPoolsInsertPathParams = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsInsertPathParams, _super);
    function ReplicapoolPoolsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectName" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertPathParams.prototype, "projectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertPathParams.prototype, "zone", void 0);
    return ReplicapoolPoolsInsertPathParams;
}(SpeakeasyBase));
export { ReplicapoolPoolsInsertPathParams };
var ReplicapoolPoolsInsertQueryParams = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsInsertQueryParams, _super);
    function ReplicapoolPoolsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ReplicapoolPoolsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertQueryParams.prototype, "userIp", void 0);
    return ReplicapoolPoolsInsertQueryParams;
}(SpeakeasyBase));
export { ReplicapoolPoolsInsertQueryParams };
var ReplicapoolPoolsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsInsertSecurityOption1, _super);
    function ReplicapoolPoolsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsInsertSecurityOption1;
}(SpeakeasyBase));
export { ReplicapoolPoolsInsertSecurityOption1 };
var ReplicapoolPoolsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsInsertSecurityOption2, _super);
    function ReplicapoolPoolsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsInsertSecurityOption2;
}(SpeakeasyBase));
export { ReplicapoolPoolsInsertSecurityOption2 };
var ReplicapoolPoolsInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsInsertSecurityOption3, _super);
    function ReplicapoolPoolsInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsInsertSecurityOption3.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsInsertSecurityOption3;
}(SpeakeasyBase));
export { ReplicapoolPoolsInsertSecurityOption3 };
var ReplicapoolPoolsInsertSecurity = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsInsertSecurity, _super);
    function ReplicapoolPoolsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsInsertSecurityOption1)
    ], ReplicapoolPoolsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsInsertSecurityOption2)
    ], ReplicapoolPoolsInsertSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsInsertSecurityOption3)
    ], ReplicapoolPoolsInsertSecurity.prototype, "option3", void 0);
    return ReplicapoolPoolsInsertSecurity;
}(SpeakeasyBase));
export { ReplicapoolPoolsInsertSecurity };
var ReplicapoolPoolsInsertRequest = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsInsertRequest, _super);
    function ReplicapoolPoolsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolPoolsInsertPathParams)
    ], ReplicapoolPoolsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolPoolsInsertQueryParams)
    ], ReplicapoolPoolsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Pool)
    ], ReplicapoolPoolsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolPoolsInsertSecurity)
    ], ReplicapoolPoolsInsertRequest.prototype, "security", void 0);
    return ReplicapoolPoolsInsertRequest;
}(SpeakeasyBase));
export { ReplicapoolPoolsInsertRequest };
var ReplicapoolPoolsInsertResponse = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsInsertResponse, _super);
    function ReplicapoolPoolsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReplicapoolPoolsInsertResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplicapoolPoolsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReplicapoolPoolsInsertResponse.prototype, "statusCode", void 0);
    return ReplicapoolPoolsInsertResponse;
}(SpeakeasyBase));
export { ReplicapoolPoolsInsertResponse };
