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
var StorageNotificationsListPathParams = /** @class */ (function (_super) {
    __extends(StorageNotificationsListPathParams, _super);
    function StorageNotificationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageNotificationsListPathParams.prototype, "bucket", void 0);
    return StorageNotificationsListPathParams;
}(SpeakeasyBase));
export { StorageNotificationsListPathParams };
var StorageNotificationsListQueryParams = /** @class */ (function (_super) {
    __extends(StorageNotificationsListQueryParams, _super);
    function StorageNotificationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageNotificationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageNotificationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageNotificationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageNotificationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageNotificationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageNotificationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageNotificationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageNotificationsListQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageNotificationsListQueryParams.prototype, "userProject", void 0);
    return StorageNotificationsListQueryParams;
}(SpeakeasyBase));
export { StorageNotificationsListQueryParams };
var StorageNotificationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageNotificationsListSecurityOption1, _super);
    function StorageNotificationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsListSecurityOption1.prototype, "oauth2c", void 0);
    return StorageNotificationsListSecurityOption1;
}(SpeakeasyBase));
export { StorageNotificationsListSecurityOption1 };
var StorageNotificationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageNotificationsListSecurityOption2, _super);
    function StorageNotificationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsListSecurityOption2.prototype, "oauth2c", void 0);
    return StorageNotificationsListSecurityOption2;
}(SpeakeasyBase));
export { StorageNotificationsListSecurityOption2 };
var StorageNotificationsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageNotificationsListSecurityOption3, _super);
    function StorageNotificationsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsListSecurityOption3.prototype, "oauth2c", void 0);
    return StorageNotificationsListSecurityOption3;
}(SpeakeasyBase));
export { StorageNotificationsListSecurityOption3 };
var StorageNotificationsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(StorageNotificationsListSecurityOption4, _super);
    function StorageNotificationsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsListSecurityOption4.prototype, "oauth2c", void 0);
    return StorageNotificationsListSecurityOption4;
}(SpeakeasyBase));
export { StorageNotificationsListSecurityOption4 };
var StorageNotificationsListSecurityOption5 = /** @class */ (function (_super) {
    __extends(StorageNotificationsListSecurityOption5, _super);
    function StorageNotificationsListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageNotificationsListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageNotificationsListSecurityOption5.prototype, "oauth2c", void 0);
    return StorageNotificationsListSecurityOption5;
}(SpeakeasyBase));
export { StorageNotificationsListSecurityOption5 };
var StorageNotificationsListSecurity = /** @class */ (function (_super) {
    __extends(StorageNotificationsListSecurity, _super);
    function StorageNotificationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsListSecurityOption1)
    ], StorageNotificationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsListSecurityOption2)
    ], StorageNotificationsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsListSecurityOption3)
    ], StorageNotificationsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsListSecurityOption4)
    ], StorageNotificationsListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageNotificationsListSecurityOption5)
    ], StorageNotificationsListSecurity.prototype, "option5", void 0);
    return StorageNotificationsListSecurity;
}(SpeakeasyBase));
export { StorageNotificationsListSecurity };
var StorageNotificationsListRequest = /** @class */ (function (_super) {
    __extends(StorageNotificationsListRequest, _super);
    function StorageNotificationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageNotificationsListPathParams)
    ], StorageNotificationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageNotificationsListQueryParams)
    ], StorageNotificationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageNotificationsListSecurity)
    ], StorageNotificationsListRequest.prototype, "security", void 0);
    return StorageNotificationsListRequest;
}(SpeakeasyBase));
export { StorageNotificationsListRequest };
var StorageNotificationsListResponse = /** @class */ (function (_super) {
    __extends(StorageNotificationsListResponse, _super);
    function StorageNotificationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageNotificationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Notifications)
    ], StorageNotificationsListResponse.prototype, "notifications", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageNotificationsListResponse.prototype, "statusCode", void 0);
    return StorageNotificationsListResponse;
}(SpeakeasyBase));
export { StorageNotificationsListResponse };
