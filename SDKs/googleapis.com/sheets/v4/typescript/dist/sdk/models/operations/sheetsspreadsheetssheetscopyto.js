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
var SheetsSpreadsheetsSheetsCopyToPathParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsSheetsCopyToPathParams, _super);
    function SheetsSpreadsheetsSheetsCopyToPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sheetId" }),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsSheetsCopyToPathParams.prototype, "sheetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsSheetsCopyToPathParams.prototype, "spreadsheetId", void 0);
    return SheetsSpreadsheetsSheetsCopyToPathParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsSheetsCopyToPathParams };
var SheetsSpreadsheetsSheetsCopyToQueryParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsSheetsCopyToQueryParams, _super);
    function SheetsSpreadsheetsSheetsCopyToQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsSheetsCopyToQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsSheetsCopyToQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsSheetsCopyToQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsSheetsCopyToQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsSheetsCopyToQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsSheetsCopyToQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsSheetsCopyToQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsSheetsCopyToQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsSheetsCopyToQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsSheetsCopyToQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsSheetsCopyToQueryParams.prototype, "uploadProtocol", void 0);
    return SheetsSpreadsheetsSheetsCopyToQueryParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsSheetsCopyToQueryParams };
var SheetsSpreadsheetsSheetsCopyToSecurityOption1 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsSheetsCopyToSecurityOption1, _super);
    function SheetsSpreadsheetsSheetsCopyToSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsSheetsCopyToSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsSheetsCopyToSecurityOption1.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsSheetsCopyToSecurityOption1;
}(SpeakeasyBase));
export { SheetsSpreadsheetsSheetsCopyToSecurityOption1 };
var SheetsSpreadsheetsSheetsCopyToSecurityOption2 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsSheetsCopyToSecurityOption2, _super);
    function SheetsSpreadsheetsSheetsCopyToSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsSheetsCopyToSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsSheetsCopyToSecurityOption2.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsSheetsCopyToSecurityOption2;
}(SpeakeasyBase));
export { SheetsSpreadsheetsSheetsCopyToSecurityOption2 };
var SheetsSpreadsheetsSheetsCopyToSecurityOption3 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsSheetsCopyToSecurityOption3, _super);
    function SheetsSpreadsheetsSheetsCopyToSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsSheetsCopyToSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsSheetsCopyToSecurityOption3.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsSheetsCopyToSecurityOption3;
}(SpeakeasyBase));
export { SheetsSpreadsheetsSheetsCopyToSecurityOption3 };
var SheetsSpreadsheetsSheetsCopyToSecurity = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsSheetsCopyToSecurity, _super);
    function SheetsSpreadsheetsSheetsCopyToSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsSheetsCopyToSecurityOption1)
    ], SheetsSpreadsheetsSheetsCopyToSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsSheetsCopyToSecurityOption2)
    ], SheetsSpreadsheetsSheetsCopyToSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsSheetsCopyToSecurityOption3)
    ], SheetsSpreadsheetsSheetsCopyToSecurity.prototype, "option3", void 0);
    return SheetsSpreadsheetsSheetsCopyToSecurity;
}(SpeakeasyBase));
export { SheetsSpreadsheetsSheetsCopyToSecurity };
var SheetsSpreadsheetsSheetsCopyToRequest = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsSheetsCopyToRequest, _super);
    function SheetsSpreadsheetsSheetsCopyToRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsSheetsCopyToPathParams)
    ], SheetsSpreadsheetsSheetsCopyToRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsSheetsCopyToQueryParams)
    ], SheetsSpreadsheetsSheetsCopyToRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CopySheetToAnotherSpreadsheetRequest)
    ], SheetsSpreadsheetsSheetsCopyToRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsSheetsCopyToSecurity)
    ], SheetsSpreadsheetsSheetsCopyToRequest.prototype, "security", void 0);
    return SheetsSpreadsheetsSheetsCopyToRequest;
}(SpeakeasyBase));
export { SheetsSpreadsheetsSheetsCopyToRequest };
var SheetsSpreadsheetsSheetsCopyToResponse = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsSheetsCopyToResponse, _super);
    function SheetsSpreadsheetsSheetsCopyToResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsSheetsCopyToResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SheetProperties)
    ], SheetsSpreadsheetsSheetsCopyToResponse.prototype, "sheetProperties", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsSheetsCopyToResponse.prototype, "statusCode", void 0);
    return SheetsSpreadsheetsSheetsCopyToResponse;
}(SpeakeasyBase));
export { SheetsSpreadsheetsSheetsCopyToResponse };
