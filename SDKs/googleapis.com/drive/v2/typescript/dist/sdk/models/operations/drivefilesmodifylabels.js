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
var DriveFilesModifyLabelsPathParams = /** @class */ (function (_super) {
    __extends(DriveFilesModifyLabelsPathParams, _super);
    function DriveFilesModifyLabelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveFilesModifyLabelsPathParams.prototype, "fileId", void 0);
    return DriveFilesModifyLabelsPathParams;
}(SpeakeasyBase));
export { DriveFilesModifyLabelsPathParams };
var DriveFilesModifyLabelsQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesModifyLabelsQueryParams, _super);
    function DriveFilesModifyLabelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesModifyLabelsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesModifyLabelsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesModifyLabelsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesModifyLabelsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesModifyLabelsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesModifyLabelsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesModifyLabelsQueryParams.prototype, "userIp", void 0);
    return DriveFilesModifyLabelsQueryParams;
}(SpeakeasyBase));
export { DriveFilesModifyLabelsQueryParams };
var DriveFilesModifyLabelsSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesModifyLabelsSecurityOption1, _super);
    function DriveFilesModifyLabelsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesModifyLabelsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesModifyLabelsSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesModifyLabelsSecurityOption1;
}(SpeakeasyBase));
export { DriveFilesModifyLabelsSecurityOption1 };
var DriveFilesModifyLabelsSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesModifyLabelsSecurityOption2, _super);
    function DriveFilesModifyLabelsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesModifyLabelsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesModifyLabelsSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesModifyLabelsSecurityOption2;
}(SpeakeasyBase));
export { DriveFilesModifyLabelsSecurityOption2 };
var DriveFilesModifyLabelsSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesModifyLabelsSecurityOption3, _super);
    function DriveFilesModifyLabelsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesModifyLabelsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesModifyLabelsSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesModifyLabelsSecurityOption3;
}(SpeakeasyBase));
export { DriveFilesModifyLabelsSecurityOption3 };
var DriveFilesModifyLabelsSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesModifyLabelsSecurity, _super);
    function DriveFilesModifyLabelsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesModifyLabelsSecurityOption1)
    ], DriveFilesModifyLabelsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesModifyLabelsSecurityOption2)
    ], DriveFilesModifyLabelsSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesModifyLabelsSecurityOption3)
    ], DriveFilesModifyLabelsSecurity.prototype, "option3", void 0);
    return DriveFilesModifyLabelsSecurity;
}(SpeakeasyBase));
export { DriveFilesModifyLabelsSecurity };
var DriveFilesModifyLabelsRequest = /** @class */ (function (_super) {
    __extends(DriveFilesModifyLabelsRequest, _super);
    function DriveFilesModifyLabelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesModifyLabelsPathParams)
    ], DriveFilesModifyLabelsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesModifyLabelsQueryParams)
    ], DriveFilesModifyLabelsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModifyLabelsRequest)
    ], DriveFilesModifyLabelsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesModifyLabelsSecurity)
    ], DriveFilesModifyLabelsRequest.prototype, "security", void 0);
    return DriveFilesModifyLabelsRequest;
}(SpeakeasyBase));
export { DriveFilesModifyLabelsRequest };
var DriveFilesModifyLabelsResponse = /** @class */ (function (_super) {
    __extends(DriveFilesModifyLabelsResponse, _super);
    function DriveFilesModifyLabelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveFilesModifyLabelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ModifyLabelsResponse)
    ], DriveFilesModifyLabelsResponse.prototype, "modifyLabelsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveFilesModifyLabelsResponse.prototype, "statusCode", void 0);
    return DriveFilesModifyLabelsResponse;
}(SpeakeasyBase));
export { DriveFilesModifyLabelsResponse };
