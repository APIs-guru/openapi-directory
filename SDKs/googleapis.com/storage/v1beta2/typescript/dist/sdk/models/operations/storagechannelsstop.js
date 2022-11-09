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
var StorageChannelsStopQueryParams = /** @class */ (function (_super) {
    __extends(StorageChannelsStopQueryParams, _super);
    function StorageChannelsStopQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageChannelsStopQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageChannelsStopQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageChannelsStopQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageChannelsStopQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageChannelsStopQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageChannelsStopQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageChannelsStopQueryParams.prototype, "userIp", void 0);
    return StorageChannelsStopQueryParams;
}(SpeakeasyBase));
export { StorageChannelsStopQueryParams };
var StorageChannelsStopSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageChannelsStopSecurityOption1, _super);
    function StorageChannelsStopSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageChannelsStopSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageChannelsStopSecurityOption1.prototype, "oauth2c", void 0);
    return StorageChannelsStopSecurityOption1;
}(SpeakeasyBase));
export { StorageChannelsStopSecurityOption1 };
var StorageChannelsStopSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageChannelsStopSecurityOption2, _super);
    function StorageChannelsStopSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageChannelsStopSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageChannelsStopSecurityOption2.prototype, "oauth2c", void 0);
    return StorageChannelsStopSecurityOption2;
}(SpeakeasyBase));
export { StorageChannelsStopSecurityOption2 };
var StorageChannelsStopSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageChannelsStopSecurityOption3, _super);
    function StorageChannelsStopSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageChannelsStopSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageChannelsStopSecurityOption3.prototype, "oauth2c", void 0);
    return StorageChannelsStopSecurityOption3;
}(SpeakeasyBase));
export { StorageChannelsStopSecurityOption3 };
var StorageChannelsStopSecurity = /** @class */ (function (_super) {
    __extends(StorageChannelsStopSecurity, _super);
    function StorageChannelsStopSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageChannelsStopSecurityOption1)
    ], StorageChannelsStopSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageChannelsStopSecurityOption2)
    ], StorageChannelsStopSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageChannelsStopSecurityOption3)
    ], StorageChannelsStopSecurity.prototype, "option3", void 0);
    return StorageChannelsStopSecurity;
}(SpeakeasyBase));
export { StorageChannelsStopSecurity };
var StorageChannelsStopRequest = /** @class */ (function (_super) {
    __extends(StorageChannelsStopRequest, _super);
    function StorageChannelsStopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageChannelsStopQueryParams)
    ], StorageChannelsStopRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Channel)
    ], StorageChannelsStopRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageChannelsStopSecurity)
    ], StorageChannelsStopRequest.prototype, "security", void 0);
    return StorageChannelsStopRequest;
}(SpeakeasyBase));
export { StorageChannelsStopRequest };
var StorageChannelsStopResponse = /** @class */ (function (_super) {
    __extends(StorageChannelsStopResponse, _super);
    function StorageChannelsStopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageChannelsStopResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageChannelsStopResponse.prototype, "statusCode", void 0);
    return StorageChannelsStopResponse;
}(SpeakeasyBase));
export { StorageChannelsStopResponse };
