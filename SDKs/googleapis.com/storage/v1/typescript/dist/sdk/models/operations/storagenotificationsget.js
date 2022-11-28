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
var StorageNotificationsGetPathParams = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetPathParams, _super);
    function StorageNotificationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=notification" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetPathParams.prototype, "notification", void 0);
    return StorageNotificationsGetPathParams;
}(SpeakeasyBase));
export { StorageNotificationsGetPathParams };
var StorageNotificationsGetQueryParams = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetQueryParams, _super);
    function StorageNotificationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageNotificationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageNotificationsGetQueryParams.prototype, "userProject", void 0);
    return StorageNotificationsGetQueryParams;
}(SpeakeasyBase));
export { StorageNotificationsGetQueryParams };
var StorageNotificationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetSecurityOption1, _super);
    function StorageNotificationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return StorageNotificationsGetSecurityOption1;
}(SpeakeasyBase));
export { StorageNotificationsGetSecurityOption1 };
var StorageNotificationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetSecurityOption2, _super);
    function StorageNotificationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return StorageNotificationsGetSecurityOption2;
}(SpeakeasyBase));
export { StorageNotificationsGetSecurityOption2 };
var StorageNotificationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetSecurityOption3, _super);
    function StorageNotificationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return StorageNotificationsGetSecurityOption3;
}(SpeakeasyBase));
export { StorageNotificationsGetSecurityOption3 };
var StorageNotificationsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetSecurityOption4, _super);
    function StorageNotificationsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsGetSecurityOption4.prototype, "oauth2c", void 0);
    return StorageNotificationsGetSecurityOption4;
}(SpeakeasyBase));
export { StorageNotificationsGetSecurityOption4 };
var StorageNotificationsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetSecurityOption5, _super);
    function StorageNotificationsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsGetSecurityOption5.prototype, "oauth2c", void 0);
    return StorageNotificationsGetSecurityOption5;
}(SpeakeasyBase));
export { StorageNotificationsGetSecurityOption5 };
var StorageNotificationsGetSecurity = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetSecurity, _super);
    function StorageNotificationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsGetSecurityOption1)
    ], StorageNotificationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsGetSecurityOption2)
    ], StorageNotificationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsGetSecurityOption3)
    ], StorageNotificationsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsGetSecurityOption4)
    ], StorageNotificationsGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsGetSecurityOption5)
    ], StorageNotificationsGetSecurity.prototype, "option5", void 0);
    return StorageNotificationsGetSecurity;
}(SpeakeasyBase));
export { StorageNotificationsGetSecurity };
var StorageNotificationsGetRequest = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetRequest, _super);
    function StorageNotificationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageNotificationsGetPathParams)
    ], StorageNotificationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageNotificationsGetQueryParams)
    ], StorageNotificationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageNotificationsGetSecurity)
    ], StorageNotificationsGetRequest.prototype, "security", void 0);
    return StorageNotificationsGetRequest;
}(SpeakeasyBase));
export { StorageNotificationsGetRequest };
var StorageNotificationsGetResponse = /** @class */ (function (_super) {
    __extends(StorageNotificationsGetResponse, _super);
    function StorageNotificationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageNotificationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Notification)
    ], StorageNotificationsGetResponse.prototype, "notification", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageNotificationsGetResponse.prototype, "statusCode", void 0);
    return StorageNotificationsGetResponse;
}(SpeakeasyBase));
export { StorageNotificationsGetResponse };
