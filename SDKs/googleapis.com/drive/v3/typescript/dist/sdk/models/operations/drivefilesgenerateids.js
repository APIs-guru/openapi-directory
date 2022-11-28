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
var DriveFilesGenerateIdsQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesGenerateIdsQueryParams, _super);
    function DriveFilesGenerateIdsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], DriveFilesGenerateIdsQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesGenerateIdsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=space" }),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsQueryParams.prototype, "space", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsQueryParams.prototype, "userIp", void 0);
    return DriveFilesGenerateIdsQueryParams;
}(SpeakeasyBase));
export { DriveFilesGenerateIdsQueryParams };
var DriveFilesGenerateIdsSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesGenerateIdsSecurityOption1, _super);
    function DriveFilesGenerateIdsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesGenerateIdsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesGenerateIdsSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesGenerateIdsSecurityOption1;
}(SpeakeasyBase));
export { DriveFilesGenerateIdsSecurityOption1 };
var DriveFilesGenerateIdsSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesGenerateIdsSecurityOption2, _super);
    function DriveFilesGenerateIdsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesGenerateIdsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesGenerateIdsSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesGenerateIdsSecurityOption2;
}(SpeakeasyBase));
export { DriveFilesGenerateIdsSecurityOption2 };
var DriveFilesGenerateIdsSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesGenerateIdsSecurityOption3, _super);
    function DriveFilesGenerateIdsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesGenerateIdsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesGenerateIdsSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesGenerateIdsSecurityOption3;
}(SpeakeasyBase));
export { DriveFilesGenerateIdsSecurityOption3 };
var DriveFilesGenerateIdsSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesGenerateIdsSecurity, _super);
    function DriveFilesGenerateIdsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesGenerateIdsSecurityOption1)
    ], DriveFilesGenerateIdsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesGenerateIdsSecurityOption2)
    ], DriveFilesGenerateIdsSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesGenerateIdsSecurityOption3)
    ], DriveFilesGenerateIdsSecurity.prototype, "option3", void 0);
    return DriveFilesGenerateIdsSecurity;
}(SpeakeasyBase));
export { DriveFilesGenerateIdsSecurity };
var DriveFilesGenerateIdsRequest = /** @class */ (function (_super) {
    __extends(DriveFilesGenerateIdsRequest, _super);
    function DriveFilesGenerateIdsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesGenerateIdsQueryParams)
    ], DriveFilesGenerateIdsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesGenerateIdsSecurity)
    ], DriveFilesGenerateIdsRequest.prototype, "security", void 0);
    return DriveFilesGenerateIdsRequest;
}(SpeakeasyBase));
export { DriveFilesGenerateIdsRequest };
var DriveFilesGenerateIdsResponse = /** @class */ (function (_super) {
    __extends(DriveFilesGenerateIdsResponse, _super);
    function DriveFilesGenerateIdsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveFilesGenerateIdsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GeneratedIds)
    ], DriveFilesGenerateIdsResponse.prototype, "generatedIds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveFilesGenerateIdsResponse.prototype, "statusCode", void 0);
    return DriveFilesGenerateIdsResponse;
}(SpeakeasyBase));
export { DriveFilesGenerateIdsResponse };
