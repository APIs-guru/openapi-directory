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
var DriveChannelsStopQueryParams = /** @class */ (function (_super) {
    __extends(DriveChannelsStopQueryParams, _super);
    function DriveChannelsStopQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveChannelsStopQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveChannelsStopQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveChannelsStopQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveChannelsStopQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveChannelsStopQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveChannelsStopQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveChannelsStopQueryParams.prototype, "userIp", void 0);
    return DriveChannelsStopQueryParams;
}(SpeakeasyBase));
export { DriveChannelsStopQueryParams };
var DriveChannelsStopSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveChannelsStopSecurityOption1, _super);
    function DriveChannelsStopSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChannelsStopSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChannelsStopSecurityOption1.prototype, "oauth2c", void 0);
    return DriveChannelsStopSecurityOption1;
}(SpeakeasyBase));
export { DriveChannelsStopSecurityOption1 };
var DriveChannelsStopSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveChannelsStopSecurityOption2, _super);
    function DriveChannelsStopSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChannelsStopSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChannelsStopSecurityOption2.prototype, "oauth2c", void 0);
    return DriveChannelsStopSecurityOption2;
}(SpeakeasyBase));
export { DriveChannelsStopSecurityOption2 };
var DriveChannelsStopSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveChannelsStopSecurityOption3, _super);
    function DriveChannelsStopSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChannelsStopSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChannelsStopSecurityOption3.prototype, "oauth2c", void 0);
    return DriveChannelsStopSecurityOption3;
}(SpeakeasyBase));
export { DriveChannelsStopSecurityOption3 };
var DriveChannelsStopSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveChannelsStopSecurityOption4, _super);
    function DriveChannelsStopSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChannelsStopSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChannelsStopSecurityOption4.prototype, "oauth2c", void 0);
    return DriveChannelsStopSecurityOption4;
}(SpeakeasyBase));
export { DriveChannelsStopSecurityOption4 };
var DriveChannelsStopSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveChannelsStopSecurityOption5, _super);
    function DriveChannelsStopSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChannelsStopSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChannelsStopSecurityOption5.prototype, "oauth2c", void 0);
    return DriveChannelsStopSecurityOption5;
}(SpeakeasyBase));
export { DriveChannelsStopSecurityOption5 };
var DriveChannelsStopSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveChannelsStopSecurityOption6, _super);
    function DriveChannelsStopSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChannelsStopSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChannelsStopSecurityOption6.prototype, "oauth2c", void 0);
    return DriveChannelsStopSecurityOption6;
}(SpeakeasyBase));
export { DriveChannelsStopSecurityOption6 };
var DriveChannelsStopSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveChannelsStopSecurityOption7, _super);
    function DriveChannelsStopSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChannelsStopSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChannelsStopSecurityOption7.prototype, "oauth2c", void 0);
    return DriveChannelsStopSecurityOption7;
}(SpeakeasyBase));
export { DriveChannelsStopSecurityOption7 };
var DriveChannelsStopSecurityOption8 = /** @class */ (function (_super) {
    __extends(DriveChannelsStopSecurityOption8, _super);
    function DriveChannelsStopSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChannelsStopSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChannelsStopSecurityOption8.prototype, "oauth2c", void 0);
    return DriveChannelsStopSecurityOption8;
}(SpeakeasyBase));
export { DriveChannelsStopSecurityOption8 };
var DriveChannelsStopSecurity = /** @class */ (function (_super) {
    __extends(DriveChannelsStopSecurity, _super);
    function DriveChannelsStopSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChannelsStopSecurityOption1)
    ], DriveChannelsStopSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChannelsStopSecurityOption2)
    ], DriveChannelsStopSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChannelsStopSecurityOption3)
    ], DriveChannelsStopSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChannelsStopSecurityOption4)
    ], DriveChannelsStopSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChannelsStopSecurityOption5)
    ], DriveChannelsStopSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChannelsStopSecurityOption6)
    ], DriveChannelsStopSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChannelsStopSecurityOption7)
    ], DriveChannelsStopSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChannelsStopSecurityOption8)
    ], DriveChannelsStopSecurity.prototype, "option8", void 0);
    return DriveChannelsStopSecurity;
}(SpeakeasyBase));
export { DriveChannelsStopSecurity };
var DriveChannelsStopRequest = /** @class */ (function (_super) {
    __extends(DriveChannelsStopRequest, _super);
    function DriveChannelsStopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChannelsStopQueryParams)
    ], DriveChannelsStopRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Channel)
    ], DriveChannelsStopRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChannelsStopSecurity)
    ], DriveChannelsStopRequest.prototype, "security", void 0);
    return DriveChannelsStopRequest;
}(SpeakeasyBase));
export { DriveChannelsStopRequest };
var DriveChannelsStopResponse = /** @class */ (function (_super) {
    __extends(DriveChannelsStopResponse, _super);
    function DriveChannelsStopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveChannelsStopResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveChannelsStopResponse.prototype, "statusCode", void 0);
    return DriveChannelsStopResponse;
}(SpeakeasyBase));
export { DriveChannelsStopResponse };
