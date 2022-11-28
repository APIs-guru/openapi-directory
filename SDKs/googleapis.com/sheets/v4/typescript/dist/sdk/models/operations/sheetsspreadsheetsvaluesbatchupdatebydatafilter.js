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
var SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams, _super);
    function SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams.prototype, "spreadsheetId", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams };
var SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams, _super);
    function SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams.prototype, "uploadProtocol", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams };
var SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1, _super);
    function SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1 };
var SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2, _super);
    function SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2 };
var SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3, _super);
    function SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3 };
var SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity, _super);
    function SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity.prototype, "option3", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity };
var SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest, _super);
    function SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchUpdateValuesByDataFilterRequest)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest.prototype, "security", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest };
var SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse, _super);
    function SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchUpdateValuesByDataFilterResponse)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse.prototype, "batchUpdateValuesByDataFilterResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse.prototype, "statusCode", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse };
