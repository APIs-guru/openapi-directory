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
var TranslateProjectsLocationsGlossariesGlossaryEntriesCreatePathParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesCreatePathParams, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreatePathParams.prototype, "parent", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesCreatePathParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesCreatePathParams };
var TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams };
var TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1 };
var TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption2, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption2;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption2 };
var TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption2)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity.prototype, "option2", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity };
var TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsGlossariesGlossaryEntriesCreatePathParams)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GlossaryEntry)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest.prototype, "security", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest };
var TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse, _super);
    function TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GlossaryEntry)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse.prototype, "glossaryEntry", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse.prototype, "statusCode", void 0);
    return TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse;
}(SpeakeasyBase));
export { TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse };
