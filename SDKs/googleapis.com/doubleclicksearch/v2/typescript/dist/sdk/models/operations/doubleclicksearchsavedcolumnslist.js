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
var DoubleclicksearchSavedColumnsListPathParams = /** @class */ (function (_super) {
    __extends(DoubleclicksearchSavedColumnsListPathParams, _super);
    function DoubleclicksearchSavedColumnsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchSavedColumnsListPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agencyId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchSavedColumnsListPathParams.prototype, "agencyId", void 0);
    return DoubleclicksearchSavedColumnsListPathParams;
}(SpeakeasyBase));
export { DoubleclicksearchSavedColumnsListPathParams };
var DoubleclicksearchSavedColumnsListQueryParams = /** @class */ (function (_super) {
    __extends(DoubleclicksearchSavedColumnsListQueryParams, _super);
    function DoubleclicksearchSavedColumnsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DoubleclicksearchSavedColumnsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DoubleclicksearchSavedColumnsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DoubleclicksearchSavedColumnsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DoubleclicksearchSavedColumnsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DoubleclicksearchSavedColumnsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DoubleclicksearchSavedColumnsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DoubleclicksearchSavedColumnsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DoubleclicksearchSavedColumnsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DoubleclicksearchSavedColumnsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DoubleclicksearchSavedColumnsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DoubleclicksearchSavedColumnsListQueryParams.prototype, "uploadProtocol", void 0);
    return DoubleclicksearchSavedColumnsListQueryParams;
}(SpeakeasyBase));
export { DoubleclicksearchSavedColumnsListQueryParams };
var DoubleclicksearchSavedColumnsListSecurity = /** @class */ (function (_super) {
    __extends(DoubleclicksearchSavedColumnsListSecurity, _super);
    function DoubleclicksearchSavedColumnsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DoubleclicksearchSavedColumnsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DoubleclicksearchSavedColumnsListSecurity.prototype, "oauth2c", void 0);
    return DoubleclicksearchSavedColumnsListSecurity;
}(SpeakeasyBase));
export { DoubleclicksearchSavedColumnsListSecurity };
var DoubleclicksearchSavedColumnsListRequest = /** @class */ (function (_super) {
    __extends(DoubleclicksearchSavedColumnsListRequest, _super);
    function DoubleclicksearchSavedColumnsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclicksearchSavedColumnsListPathParams)
    ], DoubleclicksearchSavedColumnsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclicksearchSavedColumnsListQueryParams)
    ], DoubleclicksearchSavedColumnsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclicksearchSavedColumnsListSecurity)
    ], DoubleclicksearchSavedColumnsListRequest.prototype, "security", void 0);
    return DoubleclicksearchSavedColumnsListRequest;
}(SpeakeasyBase));
export { DoubleclicksearchSavedColumnsListRequest };
var DoubleclicksearchSavedColumnsListResponse = /** @class */ (function (_super) {
    __extends(DoubleclicksearchSavedColumnsListResponse, _super);
    function DoubleclicksearchSavedColumnsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DoubleclicksearchSavedColumnsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SavedColumnList)
    ], DoubleclicksearchSavedColumnsListResponse.prototype, "savedColumnList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DoubleclicksearchSavedColumnsListResponse.prototype, "statusCode", void 0);
    return DoubleclicksearchSavedColumnsListResponse;
}(SpeakeasyBase));
export { DoubleclicksearchSavedColumnsListResponse };
