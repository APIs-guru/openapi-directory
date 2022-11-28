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
var TranslateProjectsLocationsGlossariesGlossaryEntriesPatchPathParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesPatchPathParams, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchPathParams.prototype, "name", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesPatchPathParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesPatchPathParams };
var TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams };
var TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1 };
var TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption2, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption2.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption2;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption2 };
var TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption2)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity.prototype, "option2", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity };
var TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsGlossariesGlossaryEntriesPatchPathParams)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GlossaryEntry)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest.prototype, "security", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest };
var TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GlossaryEntry)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse.prototype, "glossaryEntry", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse.prototype, "statusCode", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse };
