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
var DriveFilesListLabelsPathParams = /** @class */ (function (_super) {
    __extends(DriveFilesListLabelsPathParams, _super);
    function DriveFilesListLabelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveFilesListLabelsPathParams.prototype, "fileId", void 0);
    return DriveFilesListLabelsPathParams;
}(SpeakeasyBase));
export { DriveFilesListLabelsPathParams };
var DriveFilesListLabelsQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesListLabelsQueryParams, _super);
    function DriveFilesListLabelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesListLabelsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesListLabelsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesListLabelsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DriveFilesListLabelsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesListLabelsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DriveFilesListLabelsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesListLabelsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesListLabelsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesListLabelsQueryParams.prototype, "userIp", void 0);
    return DriveFilesListLabelsQueryParams;
}(SpeakeasyBase));
export { DriveFilesListLabelsQueryParams };
var DriveFilesListLabelsSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesListLabelsSecurityOption1, _super);
    function DriveFilesListLabelsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesListLabelsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesListLabelsSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesListLabelsSecurityOption1;
}(SpeakeasyBase));
export { DriveFilesListLabelsSecurityOption1 };
var DriveFilesListLabelsSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesListLabelsSecurityOption2, _super);
    function DriveFilesListLabelsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesListLabelsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesListLabelsSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesListLabelsSecurityOption2;
}(SpeakeasyBase));
export { DriveFilesListLabelsSecurityOption2 };
var DriveFilesListLabelsSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesListLabelsSecurityOption3, _super);
    function DriveFilesListLabelsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesListLabelsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesListLabelsSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesListLabelsSecurityOption3;
}(SpeakeasyBase));
export { DriveFilesListLabelsSecurityOption3 };
var DriveFilesListLabelsSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveFilesListLabelsSecurityOption4, _super);
    function DriveFilesListLabelsSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesListLabelsSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesListLabelsSecurityOption4.prototype, "oauth2c", void 0);
    return DriveFilesListLabelsSecurityOption4;
}(SpeakeasyBase));
export { DriveFilesListLabelsSecurityOption4 };
var DriveFilesListLabelsSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveFilesListLabelsSecurityOption5, _super);
    function DriveFilesListLabelsSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesListLabelsSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesListLabelsSecurityOption5.prototype, "oauth2c", void 0);
    return DriveFilesListLabelsSecurityOption5;
}(SpeakeasyBase));
export { DriveFilesListLabelsSecurityOption5 };
var DriveFilesListLabelsSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesListLabelsSecurity, _super);
    function DriveFilesListLabelsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesListLabelsSecurityOption1)
    ], DriveFilesListLabelsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesListLabelsSecurityOption2)
    ], DriveFilesListLabelsSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesListLabelsSecurityOption3)
    ], DriveFilesListLabelsSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesListLabelsSecurityOption4)
    ], DriveFilesListLabelsSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesListLabelsSecurityOption5)
    ], DriveFilesListLabelsSecurity.prototype, "option5", void 0);
    return DriveFilesListLabelsSecurity;
}(SpeakeasyBase));
export { DriveFilesListLabelsSecurity };
var DriveFilesListLabelsRequest = /** @class */ (function (_super) {
    __extends(DriveFilesListLabelsRequest, _super);
    function DriveFilesListLabelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesListLabelsPathParams)
    ], DriveFilesListLabelsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesListLabelsQueryParams)
    ], DriveFilesListLabelsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesListLabelsSecurity)
    ], DriveFilesListLabelsRequest.prototype, "security", void 0);
    return DriveFilesListLabelsRequest;
}(SpeakeasyBase));
export { DriveFilesListLabelsRequest };
var DriveFilesListLabelsResponse = /** @class */ (function (_super) {
    __extends(DriveFilesListLabelsResponse, _super);
    function DriveFilesListLabelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveFilesListLabelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LabelList)
    ], DriveFilesListLabelsResponse.prototype, "labelList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveFilesListLabelsResponse.prototype, "statusCode", void 0);
    return DriveFilesListLabelsResponse;
}(SpeakeasyBase));
export { DriveFilesListLabelsResponse };
