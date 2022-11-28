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
var SheetsSpreadsheetsValuesGetPathParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesGetPathParams, _super);
    function SheetsSpreadsheetsValuesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=range" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesGetPathParams.prototype, "range", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesGetPathParams.prototype, "spreadsheetId", void 0);
    return SheetsSpreadsheetsValuesGetPathParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesGetPathParams };
export var SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum;
(function (SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum) {
    SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum["SerialNumber"] = "SERIAL_NUMBER";
    SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum["FormattedString"] = "FORMATTED_STRING";
})(SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum || (SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum = {}));
export var SheetsSpreadsheetsValuesGetMajorDimensionEnum;
(function (SheetsSpreadsheetsValuesGetMajorDimensionEnum) {
    SheetsSpreadsheetsValuesGetMajorDimensionEnum["DimensionUnspecified"] = "DIMENSION_UNSPECIFIED";
    SheetsSpreadsheetsValuesGetMajorDimensionEnum["Rows"] = "ROWS";
    SheetsSpreadsheetsValuesGetMajorDimensionEnum["Columns"] = "COLUMNS";
})(SheetsSpreadsheetsValuesGetMajorDimensionEnum || (SheetsSpreadsheetsValuesGetMajorDimensionEnum = {}));
export var SheetsSpreadsheetsValuesGetValueRenderOptionEnum;
(function (SheetsSpreadsheetsValuesGetValueRenderOptionEnum) {
    SheetsSpreadsheetsValuesGetValueRenderOptionEnum["FormattedValue"] = "FORMATTED_VALUE";
    SheetsSpreadsheetsValuesGetValueRenderOptionEnum["UnformattedValue"] = "UNFORMATTED_VALUE";
    SheetsSpreadsheetsValuesGetValueRenderOptionEnum["Formula"] = "FORMULA";
})(SheetsSpreadsheetsValuesGetValueRenderOptionEnum || (SheetsSpreadsheetsValuesGetValueRenderOptionEnum = {}));
var SheetsSpreadsheetsValuesGetQueryParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesGetQueryParams, _super);
    function SheetsSpreadsheetsValuesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateTimeRenderOption" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesGetQueryParams.prototype, "dateTimeRenderOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=majorDimension" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesGetQueryParams.prototype, "majorDimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsValuesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=valueRenderOption" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesGetQueryParams.prototype, "valueRenderOption", void 0);
    return SheetsSpreadsheetsValuesGetQueryParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesGetQueryParams };
var SheetsSpreadsheetsValuesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesGetSecurityOption1, _super);
    function SheetsSpreadsheetsValuesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesGetSecurityOption1.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesGetSecurityOption1;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesGetSecurityOption1 };
var SheetsSpreadsheetsValuesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesGetSecurityOption2, _super);
    function SheetsSpreadsheetsValuesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesGetSecurityOption2.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesGetSecurityOption2;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesGetSecurityOption2 };
var SheetsSpreadsheetsValuesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesGetSecurityOption3, _super);
    function SheetsSpreadsheetsValuesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesGetSecurityOption3.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesGetSecurityOption3;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesGetSecurityOption3 };
var SheetsSpreadsheetsValuesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesGetSecurityOption4, _super);
    function SheetsSpreadsheetsValuesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesGetSecurityOption4.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesGetSecurityOption4;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesGetSecurityOption4 };
var SheetsSpreadsheetsValuesGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesGetSecurityOption5, _super);
    function SheetsSpreadsheetsValuesGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesGetSecurityOption5.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesGetSecurityOption5;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesGetSecurityOption5 };
var SheetsSpreadsheetsValuesGetSecurity = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesGetSecurity, _super);
    function SheetsSpreadsheetsValuesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesGetSecurityOption1)
    ], SheetsSpreadsheetsValuesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesGetSecurityOption2)
    ], SheetsSpreadsheetsValuesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesGetSecurityOption3)
    ], SheetsSpreadsheetsValuesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesGetSecurityOption4)
    ], SheetsSpreadsheetsValuesGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesGetSecurityOption5)
    ], SheetsSpreadsheetsValuesGetSecurity.prototype, "option5", void 0);
    return SheetsSpreadsheetsValuesGetSecurity;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesGetSecurity };
var SheetsSpreadsheetsValuesGetRequest = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesGetRequest, _super);
    function SheetsSpreadsheetsValuesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesGetPathParams)
    ], SheetsSpreadsheetsValuesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesGetQueryParams)
    ], SheetsSpreadsheetsValuesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesGetSecurity)
    ], SheetsSpreadsheetsValuesGetRequest.prototype, "security", void 0);
    return SheetsSpreadsheetsValuesGetRequest;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesGetRequest };
var SheetsSpreadsheetsValuesGetResponse = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesGetResponse, _super);
    function SheetsSpreadsheetsValuesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsValuesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValueRange)
    ], SheetsSpreadsheetsValuesGetResponse.prototype, "valueRange", void 0);
    return SheetsSpreadsheetsValuesGetResponse;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesGetResponse };
