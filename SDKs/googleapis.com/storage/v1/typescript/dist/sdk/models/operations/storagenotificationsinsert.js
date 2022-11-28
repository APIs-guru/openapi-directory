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
var StorageNotificationsInsertPathParams = /** @class */ (function (_super) {
    __extends(StorageNotificationsInsertPathParams, _super);
    function StorageNotificationsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageNotificationsInsertPathParams.prototype, "bucket", void 0);
    return StorageNotificationsInsertPathParams;
}(SpeakeasyBase));
export { StorageNotificationsInsertPathParams };
var StorageNotificationsInsertQueryParams = /** @class */ (function (_super) {
    __extends(StorageNotificationsInsertQueryParams, _super);
    function StorageNotificationsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageNotificationsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageNotificationsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageNotificationsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageNotificationsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageNotificationsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageNotificationsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageNotificationsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageNotificationsInsertQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageNotificationsInsertQueryParams.prototype, "userProject", void 0);
    return StorageNotificationsInsertQueryParams;
}(SpeakeasyBase));
export { StorageNotificationsInsertQueryParams };
var StorageNotificationsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageNotificationsInsertSecurityOption1, _super);
    function StorageNotificationsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return StorageNotificationsInsertSecurityOption1;
}(SpeakeasyBase));
export { StorageNotificationsInsertSecurityOption1 };
var StorageNotificationsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageNotificationsInsertSecurityOption2, _super);
    function StorageNotificationsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return StorageNotificationsInsertSecurityOption2;
}(SpeakeasyBase));
export { StorageNotificationsInsertSecurityOption2 };
var StorageNotificationsInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageNotificationsInsertSecurityOption3, _super);
    function StorageNotificationsInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsInsertSecurityOption3.prototype, "oauth2c", void 0);
    return StorageNotificationsInsertSecurityOption3;
}(SpeakeasyBase));
export { StorageNotificationsInsertSecurityOption3 };
var StorageNotificationsInsertSecurity = /** @class */ (function (_super) {
    __extends(StorageNotificationsInsertSecurity, _super);
    function StorageNotificationsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsInsertSecurityOption1)
    ], StorageNotificationsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsInsertSecurityOption2)
    ], StorageNotificationsInsertSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsInsertSecurityOption3)
    ], StorageNotificationsInsertSecurity.prototype, "option3", void 0);
    return StorageNotificationsInsertSecurity;
}(SpeakeasyBase));
export { StorageNotificationsInsertSecurity };
var StorageNotificationsInsertRequest = /** @class */ (function (_super) {
    __extends(StorageNotificationsInsertRequest, _super);
    function StorageNotificationsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageNotificationsInsertPathParams)
    ], StorageNotificationsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageNotificationsInsertQueryParams)
    ], StorageNotificationsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Notification)
    ], StorageNotificationsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageNotificationsInsertSecurity)
    ], StorageNotificationsInsertRequest.prototype, "security", void 0);
    return StorageNotificationsInsertRequest;
}(SpeakeasyBase));
export { StorageNotificationsInsertRequest };
var StorageNotificationsInsertResponse = /** @class */ (function (_super) {
    __extends(StorageNotificationsInsertResponse, _super);
    function StorageNotificationsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageNotificationsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Notification)
    ], StorageNotificationsInsertResponse.prototype, "notification", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageNotificationsInsertResponse.prototype, "statusCode", void 0);
    return StorageNotificationsInsertResponse;
}(SpeakeasyBase));
export { StorageNotificationsInsertResponse };
