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
var SheetsSpreadsheetsValuesBatchClearByDataFilterPathParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchClearByDataFilterPathParams, _super);
    function SheetsSpreadsheetsValuesBatchClearByDataFilterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterPathParams.prototype, "spreadsheetId", void 0);
    return SheetsSpreadsheetsValuesBatchClearByDataFilterPathParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchClearByDataFilterPathParams };
var SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams, _super);
    function SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams.prototype, "uploadProtocol", void 0);
    return SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams };
var SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption1 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption1, _super);
    function SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption1.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption1;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption1 };
var SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption2 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption2, _super);
    function SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption2.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption2;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption2 };
var SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption3 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption3, _super);
    function SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption3.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption3;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption3 };
var SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity, _super);
    function SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption1)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption2)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption3)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity.prototype, "option3", void 0);
    return SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity };
var SheetsSpreadsheetsValuesBatchClearByDataFilterRequest = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchClearByDataFilterRequest, _super);
    function SheetsSpreadsheetsValuesBatchClearByDataFilterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchClearByDataFilterPathParams)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchClearValuesByDataFilterRequest)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterRequest.prototype, "security", void 0);
    return SheetsSpreadsheetsValuesBatchClearByDataFilterRequest;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchClearByDataFilterRequest };
var SheetsSpreadsheetsValuesBatchClearByDataFilterResponse = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchClearByDataFilterResponse, _super);
    function SheetsSpreadsheetsValuesBatchClearByDataFilterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchClearValuesByDataFilterResponse)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterResponse.prototype, "batchClearValuesByDataFilterResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsValuesBatchClearByDataFilterResponse.prototype, "statusCode", void 0);
    return SheetsSpreadsheetsValuesBatchClearByDataFilterResponse;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchClearByDataFilterResponse };
