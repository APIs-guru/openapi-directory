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
var SheetsSpreadsheetsGetByDataFilterPathParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetByDataFilterPathParams, _super);
    function SheetsSpreadsheetsGetByDataFilterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetByDataFilterPathParams.prototype, "spreadsheetId", void 0);
    return SheetsSpreadsheetsGetByDataFilterPathParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetByDataFilterPathParams };
var SheetsSpreadsheetsGetByDataFilterQueryParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetByDataFilterQueryParams, _super);
    function SheetsSpreadsheetsGetByDataFilterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetByDataFilterQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetByDataFilterQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetByDataFilterQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetByDataFilterQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetByDataFilterQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetByDataFilterQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetByDataFilterQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsGetByDataFilterQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetByDataFilterQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetByDataFilterQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetByDataFilterQueryParams.prototype, "uploadProtocol", void 0);
    return SheetsSpreadsheetsGetByDataFilterQueryParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetByDataFilterQueryParams };
var SheetsSpreadsheetsGetByDataFilterSecurityOption1 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetByDataFilterSecurityOption1, _super);
    function SheetsSpreadsheetsGetByDataFilterSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsGetByDataFilterSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsGetByDataFilterSecurityOption1.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsGetByDataFilterSecurityOption1;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetByDataFilterSecurityOption1 };
var SheetsSpreadsheetsGetByDataFilterSecurityOption2 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetByDataFilterSecurityOption2, _super);
    function SheetsSpreadsheetsGetByDataFilterSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsGetByDataFilterSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsGetByDataFilterSecurityOption2.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsGetByDataFilterSecurityOption2;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetByDataFilterSecurityOption2 };
var SheetsSpreadsheetsGetByDataFilterSecurityOption3 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetByDataFilterSecurityOption3, _super);
    function SheetsSpreadsheetsGetByDataFilterSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsGetByDataFilterSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsGetByDataFilterSecurityOption3.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsGetByDataFilterSecurityOption3;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetByDataFilterSecurityOption3 };
var SheetsSpreadsheetsGetByDataFilterSecurity = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetByDataFilterSecurity, _super);
    function SheetsSpreadsheetsGetByDataFilterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsGetByDataFilterSecurityOption1)
    ], SheetsSpreadsheetsGetByDataFilterSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsGetByDataFilterSecurityOption2)
    ], SheetsSpreadsheetsGetByDataFilterSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsGetByDataFilterSecurityOption3)
    ], SheetsSpreadsheetsGetByDataFilterSecurity.prototype, "option3", void 0);
    return SheetsSpreadsheetsGetByDataFilterSecurity;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetByDataFilterSecurity };
var SheetsSpreadsheetsGetByDataFilterRequest = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetByDataFilterRequest, _super);
    function SheetsSpreadsheetsGetByDataFilterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsGetByDataFilterPathParams)
    ], SheetsSpreadsheetsGetByDataFilterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsGetByDataFilterQueryParams)
    ], SheetsSpreadsheetsGetByDataFilterRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetSpreadsheetByDataFilterRequest)
    ], SheetsSpreadsheetsGetByDataFilterRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsGetByDataFilterSecurity)
    ], SheetsSpreadsheetsGetByDataFilterRequest.prototype, "security", void 0);
    return SheetsSpreadsheetsGetByDataFilterRequest;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetByDataFilterRequest };
var SheetsSpreadsheetsGetByDataFilterResponse = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetByDataFilterResponse, _super);
    function SheetsSpreadsheetsGetByDataFilterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetByDataFilterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Spreadsheet)
    ], SheetsSpreadsheetsGetByDataFilterResponse.prototype, "spreadsheet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsGetByDataFilterResponse.prototype, "statusCode", void 0);
    return SheetsSpreadsheetsGetByDataFilterResponse;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetByDataFilterResponse };
