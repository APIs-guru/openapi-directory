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
var SheetsSpreadsheetsValuesBatchClearPathParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchClearPathParams, _super);
    function SheetsSpreadsheetsValuesBatchClearPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearPathParams.prototype, "spreadsheetId", void 0);
    return SheetsSpreadsheetsValuesBatchClearPathParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchClearPathParams };
var SheetsSpreadsheetsValuesBatchClearQueryParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchClearQueryParams, _super);
    function SheetsSpreadsheetsValuesBatchClearQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsValuesBatchClearQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearQueryParams.prototype, "uploadProtocol", void 0);
    return SheetsSpreadsheetsValuesBatchClearQueryParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchClearQueryParams };
var SheetsSpreadsheetsValuesBatchClearSecurityOption1 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchClearSecurityOption1, _super);
    function SheetsSpreadsheetsValuesBatchClearSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchClearSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchClearSecurityOption1.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchClearSecurityOption1;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchClearSecurityOption1 };
var SheetsSpreadsheetsValuesBatchClearSecurityOption2 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchClearSecurityOption2, _super);
    function SheetsSpreadsheetsValuesBatchClearSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchClearSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchClearSecurityOption2.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchClearSecurityOption2;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchClearSecurityOption2 };
var SheetsSpreadsheetsValuesBatchClearSecurityOption3 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchClearSecurityOption3, _super);
    function SheetsSpreadsheetsValuesBatchClearSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchClearSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchClearSecurityOption3.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchClearSecurityOption3;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchClearSecurityOption3 };
var SheetsSpreadsheetsValuesBatchClearSecurity = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchClearSecurity, _super);
    function SheetsSpreadsheetsValuesBatchClearSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchClearSecurityOption1)
    ], SheetsSpreadsheetsValuesBatchClearSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchClearSecurityOption2)
    ], SheetsSpreadsheetsValuesBatchClearSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchClearSecurityOption3)
    ], SheetsSpreadsheetsValuesBatchClearSecurity.prototype, "option3", void 0);
    return SheetsSpreadsheetsValuesBatchClearSecurity;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchClearSecurity };
var SheetsSpreadsheetsValuesBatchClearRequest = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchClearRequest, _super);
    function SheetsSpreadsheetsValuesBatchClearRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchClearPathParams)
    ], SheetsSpreadsheetsValuesBatchClearRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchClearQueryParams)
    ], SheetsSpreadsheetsValuesBatchClearRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchClearValuesRequest)
    ], SheetsSpreadsheetsValuesBatchClearRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchClearSecurity)
    ], SheetsSpreadsheetsValuesBatchClearRequest.prototype, "security", void 0);
    return SheetsSpreadsheetsValuesBatchClearRequest;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchClearRequest };
var SheetsSpreadsheetsValuesBatchClearResponse = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchClearResponse, _super);
    function SheetsSpreadsheetsValuesBatchClearResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchClearValuesResponse)
    ], SheetsSpreadsheetsValuesBatchClearResponse.prototype, "batchClearValuesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchClearResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsValuesBatchClearResponse.prototype, "statusCode", void 0);
    return SheetsSpreadsheetsValuesBatchClearResponse;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchClearResponse };
