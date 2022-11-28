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
var SheetsSpreadsheetsGetPathParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetPathParams, _super);
    function SheetsSpreadsheetsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetPathParams.prototype, "spreadsheetId", void 0);
    return SheetsSpreadsheetsGetPathParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetPathParams };
var SheetsSpreadsheetsGetQueryParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetQueryParams, _super);
    function SheetsSpreadsheetsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeGridData" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsGetQueryParams.prototype, "includeGridData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ranges" }),
        __metadata("design:type", Array)
    ], SheetsSpreadsheetsGetQueryParams.prototype, "ranges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetQueryParams.prototype, "uploadProtocol", void 0);
    return SheetsSpreadsheetsGetQueryParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetQueryParams };
var SheetsSpreadsheetsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetSecurityOption1, _super);
    function SheetsSpreadsheetsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsGetSecurityOption1.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsGetSecurityOption1;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetSecurityOption1 };
var SheetsSpreadsheetsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetSecurityOption2, _super);
    function SheetsSpreadsheetsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsGetSecurityOption2.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsGetSecurityOption2;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetSecurityOption2 };
var SheetsSpreadsheetsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetSecurityOption3, _super);
    function SheetsSpreadsheetsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsGetSecurityOption3.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsGetSecurityOption3;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetSecurityOption3 };
var SheetsSpreadsheetsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetSecurityOption4, _super);
    function SheetsSpreadsheetsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsGetSecurityOption4.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsGetSecurityOption4;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetSecurityOption4 };
var SheetsSpreadsheetsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetSecurityOption5, _super);
    function SheetsSpreadsheetsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsGetSecurityOption5.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsGetSecurityOption5;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetSecurityOption5 };
var SheetsSpreadsheetsGetSecurity = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetSecurity, _super);
    function SheetsSpreadsheetsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsGetSecurityOption1)
    ], SheetsSpreadsheetsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsGetSecurityOption2)
    ], SheetsSpreadsheetsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsGetSecurityOption3)
    ], SheetsSpreadsheetsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsGetSecurityOption4)
    ], SheetsSpreadsheetsGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsGetSecurityOption5)
    ], SheetsSpreadsheetsGetSecurity.prototype, "option5", void 0);
    return SheetsSpreadsheetsGetSecurity;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetSecurity };
var SheetsSpreadsheetsGetRequest = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetRequest, _super);
    function SheetsSpreadsheetsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsGetPathParams)
    ], SheetsSpreadsheetsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsGetQueryParams)
    ], SheetsSpreadsheetsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsGetSecurity)
    ], SheetsSpreadsheetsGetRequest.prototype, "security", void 0);
    return SheetsSpreadsheetsGetRequest;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetRequest };
var SheetsSpreadsheetsGetResponse = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsGetResponse, _super);
    function SheetsSpreadsheetsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Spreadsheet)
    ], SheetsSpreadsheetsGetResponse.prototype, "spreadsheet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsGetResponse.prototype, "statusCode", void 0);
    return SheetsSpreadsheetsGetResponse;
}(SpeakeasyBase));
export { SheetsSpreadsheetsGetResponse };
