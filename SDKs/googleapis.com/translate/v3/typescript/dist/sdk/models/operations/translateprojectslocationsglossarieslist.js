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
var TranslateProjectsLocationsGlossariesListPathParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesListPathParams, _super);
    function TranslateProjectsLocationsGlossariesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesListPathParams.prototype, "parent", void 0);
    return TranslateProjectsLocationsGlossariesListPathParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesListPathParams };
var TranslateProjectsLocationsGlossariesListQueryParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesListQueryParams, _super);
    function TranslateProjectsLocationsGlossariesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], TranslateProjectsLocationsGlossariesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TranslateProjectsLocationsGlossariesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesListQueryParams.prototype, "uploadProtocol", void 0);
    return TranslateProjectsLocationsGlossariesListQueryParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesListQueryParams };
var TranslateProjectsLocationsGlossariesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesListSecurityOption1, _super);
    function TranslateProjectsLocationsGlossariesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsGlossariesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsGlossariesListSecurityOption1.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsGlossariesListSecurityOption1;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesListSecurityOption1 };
var TranslateProjectsLocationsGlossariesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesListSecurityOption2, _super);
    function TranslateProjectsLocationsGlossariesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsGlossariesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsGlossariesListSecurityOption2.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsGlossariesListSecurityOption2;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesListSecurityOption2 };
var TranslateProjectsLocationsGlossariesListSecurity = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesListSecurity, _super);
    function TranslateProjectsLocationsGlossariesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsGlossariesListSecurityOption1)
    ], TranslateProjectsLocationsGlossariesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsGlossariesListSecurityOption2)
    ], TranslateProjectsLocationsGlossariesListSecurity.prototype, "option2", void 0);
    return TranslateProjectsLocationsGlossariesListSecurity;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesListSecurity };
var TranslateProjectsLocationsGlossariesListRequest = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesListRequest, _super);
    function TranslateProjectsLocationsGlossariesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsGlossariesListPathParams)
    ], TranslateProjectsLocationsGlossariesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsGlossariesListQueryParams)
    ], TranslateProjectsLocationsGlossariesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsGlossariesListSecurity)
    ], TranslateProjectsLocationsGlossariesListRequest.prototype, "security", void 0);
    return TranslateProjectsLocationsGlossariesListRequest;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesListRequest };
var TranslateProjectsLocationsGlossariesListResponse = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesListResponse, _super);
    function TranslateProjectsLocationsGlossariesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListGlossariesResponse)
    ], TranslateProjectsLocationsGlossariesListResponse.prototype, "listGlossariesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslateProjectsLocationsGlossariesListResponse.prototype, "statusCode", void 0);
    return TranslateProjectsLocationsGlossariesListResponse;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesListResponse };
