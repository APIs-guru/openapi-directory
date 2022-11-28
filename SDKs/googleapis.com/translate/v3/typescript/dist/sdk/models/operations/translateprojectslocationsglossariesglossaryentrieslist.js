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
var TranslateProjectsLocationsGlossariesGlossaryEntriesListPathParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesListPathParams, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListPathParams.prototype, "parent", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesListPathParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesListPathParams };
var TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams.prototype, "uploadProtocol", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams };
var TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption1, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption1.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption1;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption1 };
var TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption2, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption2.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption2;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption2 };
var TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurity = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurity, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption1)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption2)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurity.prototype, "option2", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurity;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurity };
var TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsGlossariesGlossaryEntriesListPathParams)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurity)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest.prototype, "security", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest };
var TranslateProjectsLocationsGlossariesGlossaryEntriesListResponse = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesListResponse, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListGlossaryEntriesResponse)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListResponse.prototype, "listGlossaryEntriesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesListResponse.prototype, "statusCode", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesListResponse;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesListResponse };
