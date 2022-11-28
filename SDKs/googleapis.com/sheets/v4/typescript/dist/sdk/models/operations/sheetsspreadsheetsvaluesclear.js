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
var SheetsSpreadsheetsValuesClearPathParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesClearPathParams, _super);
    function SheetsSpreadsheetsValuesClearPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=range" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesClearPathParams.prototype, "range", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesClearPathParams.prototype, "spreadsheetId", void 0);
    return SheetsSpreadsheetsValuesClearPathParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesClearPathParams };
var SheetsSpreadsheetsValuesClearQueryParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesClearQueryParams, _super);
    function SheetsSpreadsheetsValuesClearQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesClearQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesClearQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesClearQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesClearQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesClearQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesClearQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesClearQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsValuesClearQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesClearQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesClearQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesClearQueryParams.prototype, "uploadProtocol", void 0);
    return SheetsSpreadsheetsValuesClearQueryParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesClearQueryParams };
var SheetsSpreadsheetsValuesClearSecurityOption1 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesClearSecurityOption1, _super);
    function SheetsSpreadsheetsValuesClearSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesClearSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesClearSecurityOption1.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesClearSecurityOption1;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesClearSecurityOption1 };
var SheetsSpreadsheetsValuesClearSecurityOption2 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesClearSecurityOption2, _super);
    function SheetsSpreadsheetsValuesClearSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesClearSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesClearSecurityOption2.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesClearSecurityOption2;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesClearSecurityOption2 };
var SheetsSpreadsheetsValuesClearSecurityOption3 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesClearSecurityOption3, _super);
    function SheetsSpreadsheetsValuesClearSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesClearSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesClearSecurityOption3.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesClearSecurityOption3;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesClearSecurityOption3 };
var SheetsSpreadsheetsValuesClearSecurity = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesClearSecurity, _super);
    function SheetsSpreadsheetsValuesClearSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesClearSecurityOption1)
    ], SheetsSpreadsheetsValuesClearSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesClearSecurityOption2)
    ], SheetsSpreadsheetsValuesClearSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesClearSecurityOption3)
    ], SheetsSpreadsheetsValuesClearSecurity.prototype, "option3", void 0);
    return SheetsSpreadsheetsValuesClearSecurity;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesClearSecurity };
var SheetsSpreadsheetsValuesClearRequest = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesClearRequest, _super);
    function SheetsSpreadsheetsValuesClearRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesClearPathParams)
    ], SheetsSpreadsheetsValuesClearRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesClearQueryParams)
    ], SheetsSpreadsheetsValuesClearRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], SheetsSpreadsheetsValuesClearRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesClearSecurity)
    ], SheetsSpreadsheetsValuesClearRequest.prototype, "security", void 0);
    return SheetsSpreadsheetsValuesClearRequest;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesClearRequest };
var SheetsSpreadsheetsValuesClearResponse = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesClearResponse, _super);
    function SheetsSpreadsheetsValuesClearResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ClearValuesResponse)
    ], SheetsSpreadsheetsValuesClearResponse.prototype, "clearValuesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesClearResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsValuesClearResponse.prototype, "statusCode", void 0);
    return SheetsSpreadsheetsValuesClearResponse;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesClearResponse };
