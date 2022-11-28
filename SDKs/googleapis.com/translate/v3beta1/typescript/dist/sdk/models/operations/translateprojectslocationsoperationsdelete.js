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
var TranslateProjectsLocationsOperationsDeletePathParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsDeletePathParams, _super);
    function TranslateProjectsLocationsOperationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsDeletePathParams.prototype, "name", void 0);
    return TranslateProjectsLocationsOperationsDeletePathParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsDeletePathParams };
var TranslateProjectsLocationsOperationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsDeleteQueryParams, _super);
    function TranslateProjectsLocationsOperationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TranslateProjectsLocationsOperationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return TranslateProjectsLocationsOperationsDeleteQueryParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsDeleteQueryParams };
var TranslateProjectsLocationsOperationsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsDeleteSecurityOption1, _super);
    function TranslateProjectsLocationsOperationsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsOperationsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsOperationsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsOperationsDeleteSecurityOption1;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsDeleteSecurityOption1 };
var TranslateProjectsLocationsOperationsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsDeleteSecurityOption2, _super);
    function TranslateProjectsLocationsOperationsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsOperationsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsOperationsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsOperationsDeleteSecurityOption2;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsDeleteSecurityOption2 };
var TranslateProjectsLocationsOperationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsDeleteSecurity, _super);
    function TranslateProjectsLocationsOperationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsOperationsDeleteSecurityOption1)
    ], TranslateProjectsLocationsOperationsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsOperationsDeleteSecurityOption2)
    ], TranslateProjectsLocationsOperationsDeleteSecurity.prototype, "option2", void 0);
    return TranslateProjectsLocationsOperationsDeleteSecurity;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsDeleteSecurity };
var TranslateProjectsLocationsOperationsDeleteRequest = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsDeleteRequest, _super);
    function TranslateProjectsLocationsOperationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsOperationsDeletePathParams)
    ], TranslateProjectsLocationsOperationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsOperationsDeleteQueryParams)
    ], TranslateProjectsLocationsOperationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsOperationsDeleteSecurity)
    ], TranslateProjectsLocationsOperationsDeleteRequest.prototype, "security", void 0);
    return TranslateProjectsLocationsOperationsDeleteRequest;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsDeleteRequest };
var TranslateProjectsLocationsOperationsDeleteResponse = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsDeleteResponse, _super);
    function TranslateProjectsLocationsOperationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TranslateProjectsLocationsOperationsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslateProjectsLocationsOperationsDeleteResponse.prototype, "statusCode", void 0);
    return TranslateProjectsLocationsOperationsDeleteResponse;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsDeleteResponse };
