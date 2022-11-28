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
var SheetsSpreadsheetsValuesBatchUpdatePathParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdatePathParams, _super);
    function SheetsSpreadsheetsValuesBatchUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdatePathParams.prototype, "spreadsheetId", void 0);
    return SheetsSpreadsheetsValuesBatchUpdatePathParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchUpdatePathParams };
var SheetsSpreadsheetsValuesBatchUpdateQueryParams = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateQueryParams, _super);
    function SheetsSpreadsheetsValuesBatchUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SheetsSpreadsheetsValuesBatchUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateQueryParams;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchUpdateQueryParams };
var SheetsSpreadsheetsValuesBatchUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateSecurityOption1, _super);
    function SheetsSpreadsheetsValuesBatchUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateSecurityOption1;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchUpdateSecurityOption1 };
var SheetsSpreadsheetsValuesBatchUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateSecurityOption2, _super);
    function SheetsSpreadsheetsValuesBatchUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateSecurityOption2;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchUpdateSecurityOption2 };
var SheetsSpreadsheetsValuesBatchUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateSecurityOption3, _super);
    function SheetsSpreadsheetsValuesBatchUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SheetsSpreadsheetsValuesBatchUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SheetsSpreadsheetsValuesBatchUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateSecurityOption3;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchUpdateSecurityOption3 };
var SheetsSpreadsheetsValuesBatchUpdateSecurity = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateSecurity, _super);
    function SheetsSpreadsheetsValuesBatchUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdateSecurityOption1)
    ], SheetsSpreadsheetsValuesBatchUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdateSecurityOption2)
    ], SheetsSpreadsheetsValuesBatchUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdateSecurityOption3)
    ], SheetsSpreadsheetsValuesBatchUpdateSecurity.prototype, "option3", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateSecurity;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchUpdateSecurity };
var SheetsSpreadsheetsValuesBatchUpdateRequest = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateRequest, _super);
    function SheetsSpreadsheetsValuesBatchUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdatePathParams)
    ], SheetsSpreadsheetsValuesBatchUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdateQueryParams)
    ], SheetsSpreadsheetsValuesBatchUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchUpdateValuesRequest)
    ], SheetsSpreadsheetsValuesBatchUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SheetsSpreadsheetsValuesBatchUpdateSecurity)
    ], SheetsSpreadsheetsValuesBatchUpdateRequest.prototype, "security", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateRequest;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchUpdateRequest };
var SheetsSpreadsheetsValuesBatchUpdateResponse = /** @class */ (function (_super) {
    __extends(SheetsSpreadsheetsValuesBatchUpdateResponse, _super);
    function SheetsSpreadsheetsValuesBatchUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchUpdateValuesResponse)
    ], SheetsSpreadsheetsValuesBatchUpdateResponse.prototype, "batchUpdateValuesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SheetsSpreadsheetsValuesBatchUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SheetsSpreadsheetsValuesBatchUpdateResponse.prototype, "statusCode", void 0);
    return SheetsSpreadsheetsValuesBatchUpdateResponse;
}(SpeakeasyBase));
export { SheetsSpreadsheetsValuesBatchUpdateResponse };
