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
var SheetsSpreadsheetsValuesUpdatePathParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesUpdatePathParams, _super);
    function SheetsSpreadsheetsValuesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=range" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesUpdatePathParams.prototype, "range", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesUpdatePathParams.prototype, "spreadsheetId", void 0);
    return SheetsSpreadsheetsValuesUpdatePathParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesUpdatePathParams };
export var SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum;
(function (SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum) {
    SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum["SerialNumber"] = "SERIAL_NUMBER";
    SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum["FormattedString"] = "FORMATTED_STRING";
})(SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum || (SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum = {}));
export var SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum;
(function (SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum) {
    SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum["FormattedValue"] = "FORMATTED_VALUE";
    SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum["UnformattedValue"] = "UNFORMATTED_VALUE";
    SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum["Formula"] = "FORMULA";
})(SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum || (SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum = {}));
export var SheetsSpreadsheetsValuesUpdateValueInputOptionEnum;
(function (SheetsSpreadsheetsValuesUpdateValueInputOptionEnum) {
    SheetsSpreadsheetsValuesUpdateValueInputOptionEnum["InputValueOptionUnspecified"] = "INPUT_VALUE_OPTION_UNSPECIFIED";
    SheetsSpreadsheetsValuesUpdateValueInputOptionEnum["Raw"] = "RAW";
    SheetsSpreadsheetsValuesUpdateValueInputOptionEnum["UserEntered"] = "USER_ENTERED";
})(SheetsSpreadsheetsValuesUpdateValueInputOptionEnum || (SheetsSpreadsheetsValuesUpdateValueInputOptionEnum = {}));
var SheetsSpreadsheetsValuesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesUpdateQueryParams, _super);
    function SheetsSpreadsheetsValuesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeValuesInResponse" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsValuesUpdateQueryParams.prototype, "includeValuesInResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsValuesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=responseDateTimeRenderOption" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesUpdateQueryParams.prototype, "responseDateTimeRenderOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=responseValueRenderOption" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesUpdateQueryParams.prototype, "responseValueRenderOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=valueInputOption" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesUpdateQueryParams.prototype, "valueInputOption", void 0);
    return SheetsSpreadsheetsValuesUpdateQueryParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesUpdateQueryParams };
var SheetsSpreadsheetsValuesUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesUpdateSecurityOption1, _super);
    function SheetsSpreadsheetsValuesUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesUpdateSecurityOption1;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesUpdateSecurityOption1 };
var SheetsSpreadsheetsValuesUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesUpdateSecurityOption2, _super);
    function SheetsSpreadsheetsValuesUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesUpdateSecurityOption2;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesUpdateSecurityOption2 };
var SheetsSpreadsheetsValuesUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesUpdateSecurityOption3, _super);
    function SheetsSpreadsheetsValuesUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesUpdateSecurityOption3;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesUpdateSecurityOption3 };
var SheetsSpreadsheetsValuesUpdateSecurity = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesUpdateSecurity, _super);
    function SheetsSpreadsheetsValuesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesUpdateSecurityOption1)
    ], SheetsSpreadsheetsValuesUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesUpdateSecurityOption2)
    ], SheetsSpreadsheetsValuesUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesUpdateSecurityOption3)
    ], SheetsSpreadsheetsValuesUpdateSecurity.prototype, "option3", void 0);
    return SheetsSpreadsheetsValuesUpdateSecurity;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesUpdateSecurity };
var SheetsSpreadsheetsValuesUpdateRequest = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesUpdateRequest, _super);
    function SheetsSpreadsheetsValuesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesUpdatePathParams)
    ], SheetsSpreadsheetsValuesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesUpdateQueryParams)
    ], SheetsSpreadsheetsValuesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ValueRange)
    ], SheetsSpreadsheetsValuesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesUpdateSecurity)
    ], SheetsSpreadsheetsValuesUpdateRequest.prototype, "security", void 0);
    return SheetsSpreadsheetsValuesUpdateRequest;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesUpdateRequest };
var SheetsSpreadsheetsValuesUpdateResponse = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesUpdateResponse, _super);
    function SheetsSpreadsheetsValuesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsValuesUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateValuesResponse)
    ], SheetsSpreadsheetsValuesUpdateResponse.prototype, "updateValuesResponse", void 0);
    return SheetsSpreadsheetsValuesUpdateResponse;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesUpdateResponse };
