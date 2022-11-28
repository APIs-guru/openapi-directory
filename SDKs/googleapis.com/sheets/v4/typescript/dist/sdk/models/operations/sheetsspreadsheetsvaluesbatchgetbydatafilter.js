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
var SheetsSpreadsheetsValuesBatchGetByDataFilterPathParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetByDataFilterPathParams, _super);
    function SheetsSpreadsheetsValuesBatchGetByDataFilterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterPathParams.prototype, "spreadsheetId", void 0);
    return SheetsSpreadsheetsValuesBatchGetByDataFilterPathParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchGetByDataFilterPathParams };
var SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams, _super);
    function SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams.prototype, "uploadProtocol", void 0);
    return SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams };
var SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption1 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption1, _super);
    function SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption1.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption1;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption1 };
var SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption2 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption2, _super);
    function SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption2.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption2;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption2 };
var SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption3 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption3, _super);
    function SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption3.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption3;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption3 };
var SheetsSpreadsheetsValuesBatchGetByDataFilterSecurity = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetByDataFilterSecurity, _super);
    function SheetsSpreadsheetsValuesBatchGetByDataFilterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption1)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption2)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption3)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterSecurity.prototype, "option3", void 0);
    return SheetsSpreadsheetsValuesBatchGetByDataFilterSecurity;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchGetByDataFilterSecurity };
var SheetsSpreadsheetsValuesBatchGetByDataFilterRequest = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetByDataFilterRequest, _super);
    function SheetsSpreadsheetsValuesBatchGetByDataFilterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchGetByDataFilterPathParams)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchGetValuesByDataFilterRequest)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchGetByDataFilterSecurity)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterRequest.prototype, "security", void 0);
    return SheetsSpreadsheetsValuesBatchGetByDataFilterRequest;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchGetByDataFilterRequest };
var SheetsSpreadsheetsValuesBatchGetByDataFilterResponse = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchGetByDataFilterResponse, _super);
    function SheetsSpreadsheetsValuesBatchGetByDataFilterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchGetValuesByDataFilterResponse)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterResponse.prototype, "batchGetValuesByDataFilterResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsValuesBatchGetByDataFilterResponse.prototype, "statusCode", void 0);
    return SheetsSpreadsheetsValuesBatchGetByDataFilterResponse;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchGetByDataFilterResponse };
