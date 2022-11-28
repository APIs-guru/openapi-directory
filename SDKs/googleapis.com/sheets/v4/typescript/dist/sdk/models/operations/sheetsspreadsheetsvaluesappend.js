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
var SheetsSpreadsheetsValuesAppendPathParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesAppendPathParams, _super);
    function SheetsSpreadsheetsValuesAppendPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=range" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesAppendPathParams.prototype, "range", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesAppendPathParams.prototype, "spreadsheetId", void 0);
    return SheetsSpreadsheetsValuesAppendPathParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesAppendPathParams };
export var SheetsSpreadsheetsValuesAppendInsertDataOptionEnum;
(function (SheetsSpreadsheetsValuesAppendInsertDataOptionEnum) {
    SheetsSpreadsheetsValuesAppendInsertDataOptionEnum["Overwrite"] = "OVERWRITE";
    SheetsSpreadsheetsValuesAppendInsertDataOptionEnum["InsertRows"] = "INSERT_ROWS";
})(SheetsSpreadsheetsValuesAppendInsertDataOptionEnum || (SheetsSpreadsheetsValuesAppendInsertDataOptionEnum = {}));
export var SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum;
(function (SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum) {
    SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum["SerialNumber"] = "SERIAL_NUMBER";
    SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum["FormattedString"] = "FORMATTED_STRING";
})(SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum || (SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum = {}));
export var SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum;
(function (SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum) {
    SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum["FormattedValue"] = "FORMATTED_VALUE";
    SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum["UnformattedValue"] = "UNFORMATTED_VALUE";
    SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum["Formula"] = "FORMULA";
})(SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum || (SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum = {}));
export var SheetsSpreadsheetsValuesAppendValueInputOptionEnum;
(function (SheetsSpreadsheetsValuesAppendValueInputOptionEnum) {
    SheetsSpreadsheetsValuesAppendValueInputOptionEnum["InputValueOptionUnspecified"] = "INPUT_VALUE_OPTION_UNSPECIFIED";
    SheetsSpreadsheetsValuesAppendValueInputOptionEnum["Raw"] = "RAW";
    SheetsSpreadsheetsValuesAppendValueInputOptionEnum["UserEntered"] = "USER_ENTERED";
})(SheetsSpreadsheetsValuesAppendValueInputOptionEnum || (SheetsSpreadsheetsValuesAppendValueInputOptionEnum = {}));
var SheetsSpreadsheetsValuesAppendQueryParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesAppendQueryParams, _super);
    function SheetsSpreadsheetsValuesAppendQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesAppendQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesAppendQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesAppendQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesAppendQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesAppendQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeValuesInResponse" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsValuesAppendQueryParams.prototype, "includeValuesInResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=insertDataOption" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesAppendQueryParams.prototype, "insertDataOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesAppendQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesAppendQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsValuesAppendQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesAppendQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=responseDateTimeRenderOption" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesAppendQueryParams.prototype, "responseDateTimeRenderOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=responseValueRenderOption" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesAppendQueryParams.prototype, "responseValueRenderOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesAppendQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesAppendQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=valueInputOption" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesAppendQueryParams.prototype, "valueInputOption", void 0);
    return SheetsSpreadsheetsValuesAppendQueryParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesAppendQueryParams };
var SheetsSpreadsheetsValuesAppendSecurityOption1 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesAppendSecurityOption1, _super);
    function SheetsSpreadsheetsValuesAppendSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesAppendSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesAppendSecurityOption1.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesAppendSecurityOption1;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesAppendSecurityOption1 };
var SheetsSpreadsheetsValuesAppendSecurityOption2 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesAppendSecurityOption2, _super);
    function SheetsSpreadsheetsValuesAppendSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesAppendSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesAppendSecurityOption2.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesAppendSecurityOption2;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesAppendSecurityOption2 };
var SheetsSpreadsheetsValuesAppendSecurityOption3 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesAppendSecurityOption3, _super);
    function SheetsSpreadsheetsValuesAppendSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesAppendSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesAppendSecurityOption3.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesAppendSecurityOption3;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesAppendSecurityOption3 };
var SheetsSpreadsheetsValuesAppendSecurity = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesAppendSecurity, _super);
    function SheetsSpreadsheetsValuesAppendSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesAppendSecurityOption1)
    ], SheetsSpreadsheetsValuesAppendSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesAppendSecurityOption2)
    ], SheetsSpreadsheetsValuesAppendSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesAppendSecurityOption3)
    ], SheetsSpreadsheetsValuesAppendSecurity.prototype, "option3", void 0);
    return SheetsSpreadsheetsValuesAppendSecurity;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesAppendSecurity };
var SheetsSpreadsheetsValuesAppendRequest = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesAppendRequest, _super);
    function SheetsSpreadsheetsValuesAppendRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesAppendPathParams)
    ], SheetsSpreadsheetsValuesAppendRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesAppendQueryParams)
    ], SheetsSpreadsheetsValuesAppendRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ValueRange)
    ], SheetsSpreadsheetsValuesAppendRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesAppendSecurity)
    ], SheetsSpreadsheetsValuesAppendRequest.prototype, "security", void 0);
    return SheetsSpreadsheetsValuesAppendRequest;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesAppendRequest };
var SheetsSpreadsheetsValuesAppendResponse = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesAppendResponse, _super);
    function SheetsSpreadsheetsValuesAppendResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AppendValuesResponse)
    ], SheetsSpreadsheetsValuesAppendResponse.prototype, "appendValuesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesAppendResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsValuesAppendResponse.prototype, "statusCode", void 0);
    return SheetsSpreadsheetsValuesAppendResponse;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesAppendResponse };
