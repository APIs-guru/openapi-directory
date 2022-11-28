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
var SheetsSpreadsheetsBatchUpdatePathParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsBatchUpdatePathParams, _super);
    function SheetsSpreadsheetsBatchUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsBatchUpdatePathParams.prototype, "spreadsheetId", void 0);
    return SheetsSpreadsheetsBatchUpdatePathParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsBatchUpdatePathParams };
var SheetsSpreadsheetsBatchUpdateQueryParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsBatchUpdateQueryParams, _super);
    function SheetsSpreadsheetsBatchUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsBatchUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsBatchUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsBatchUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsBatchUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsBatchUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsBatchUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsBatchUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsBatchUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsBatchUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsBatchUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsBatchUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return SheetsSpreadsheetsBatchUpdateQueryParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsBatchUpdateQueryParams };
var SheetsSpreadsheetsBatchUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsBatchUpdateSecurityOption1, _super);
    function SheetsSpreadsheetsBatchUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsBatchUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsBatchUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsBatchUpdateSecurityOption1;
}(SpeakeasyBase));
export { SheetsSpreadsheetsBatchUpdateSecurityOption1 };
var SheetsSpreadsheetsBatchUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsBatchUpdateSecurityOption2, _super);
    function SheetsSpreadsheetsBatchUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsBatchUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsBatchUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsBatchUpdateSecurityOption2;
}(SpeakeasyBase));
export { SheetsSpreadsheetsBatchUpdateSecurityOption2 };
var SheetsSpreadsheetsBatchUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsBatchUpdateSecurityOption3, _super);
    function SheetsSpreadsheetsBatchUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsBatchUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsBatchUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsBatchUpdateSecurityOption3;
}(SpeakeasyBase));
export { SheetsSpreadsheetsBatchUpdateSecurityOption3 };
var SheetsSpreadsheetsBatchUpdateSecurity = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsBatchUpdateSecurity, _super);
    function SheetsSpreadsheetsBatchUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsBatchUpdateSecurityOption1)
    ], SheetsSpreadsheetsBatchUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsBatchUpdateSecurityOption2)
    ], SheetsSpreadsheetsBatchUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsBatchUpdateSecurityOption3)
    ], SheetsSpreadsheetsBatchUpdateSecurity.prototype, "option3", void 0);
    return SheetsSpreadsheetsBatchUpdateSecurity;
}(SpeakeasyBase));
export { SheetsSpreadsheetsBatchUpdateSecurity };
var SheetsSpreadsheetsBatchUpdateRequest = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsBatchUpdateRequest, _super);
    function SheetsSpreadsheetsBatchUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsBatchUpdatePathParams)
    ], SheetsSpreadsheetsBatchUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsBatchUpdateQueryParams)
    ], SheetsSpreadsheetsBatchUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchUpdateSpreadsheetRequest)
    ], SheetsSpreadsheetsBatchUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsBatchUpdateSecurity)
    ], SheetsSpreadsheetsBatchUpdateRequest.prototype, "security", void 0);
    return SheetsSpreadsheetsBatchUpdateRequest;
}(SpeakeasyBase));
export { SheetsSpreadsheetsBatchUpdateRequest };
var SheetsSpreadsheetsBatchUpdateResponse = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsBatchUpdateResponse, _super);
    function SheetsSpreadsheetsBatchUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchUpdateSpreadsheetResponse)
    ], SheetsSpreadsheetsBatchUpdateResponse.prototype, "batchUpdateSpreadsheetResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsBatchUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsBatchUpdateResponse.prototype, "statusCode", void 0);
    return SheetsSpreadsheetsBatchUpdateResponse;
}(SpeakeasyBase));
export { SheetsSpreadsheetsBatchUpdateResponse };
