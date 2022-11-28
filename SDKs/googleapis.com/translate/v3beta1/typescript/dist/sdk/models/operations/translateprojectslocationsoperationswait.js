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
var TranslateProjectsLocationsOperationsWaitPathParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsWaitPathParams, _super);
    function TranslateProjectsLocationsOperationsWaitPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsWaitPathParams.prototype, "name", void 0);
    return TranslateProjectsLocationsOperationsWaitPathParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsWaitPathParams };
var TranslateProjectsLocationsOperationsWaitQueryParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsWaitQueryParams, _super);
    function TranslateProjectsLocationsOperationsWaitQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsWaitQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsWaitQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsWaitQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsWaitQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsWaitQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsWaitQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsWaitQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TranslateProjectsLocationsOperationsWaitQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsWaitQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsWaitQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsWaitQueryParams.prototype, "uploadProtocol", void 0);
    return TranslateProjectsLocationsOperationsWaitQueryParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsWaitQueryParams };
var TranslateProjectsLocationsOperationsWaitSecurityOption1 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsWaitSecurityOption1, _super);
    function TranslateProjectsLocationsOperationsWaitSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsOperationsWaitSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsOperationsWaitSecurityOption1.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsOperationsWaitSecurityOption1;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsWaitSecurityOption1 };
var TranslateProjectsLocationsOperationsWaitSecurityOption2 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsWaitSecurityOption2, _super);
    function TranslateProjectsLocationsOperationsWaitSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsOperationsWaitSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsOperationsWaitSecurityOption2.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsOperationsWaitSecurityOption2;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsWaitSecurityOption2 };
var TranslateProjectsLocationsOperationsWaitSecurity = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsWaitSecurity, _super);
    function TranslateProjectsLocationsOperationsWaitSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsOperationsWaitSecurityOption1)
    ], TranslateProjectsLocationsOperationsWaitSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsOperationsWaitSecurityOption2)
    ], TranslateProjectsLocationsOperationsWaitSecurity.prototype, "option2", void 0);
    return TranslateProjectsLocationsOperationsWaitSecurity;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsWaitSecurity };
var TranslateProjectsLocationsOperationsWaitRequest = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsWaitRequest, _super);
    function TranslateProjectsLocationsOperationsWaitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsOperationsWaitPathParams)
    ], TranslateProjectsLocationsOperationsWaitRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsOperationsWaitQueryParams)
    ], TranslateProjectsLocationsOperationsWaitRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WaitOperationRequest)
    ], TranslateProjectsLocationsOperationsWaitRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsOperationsWaitSecurity)
    ], TranslateProjectsLocationsOperationsWaitRequest.prototype, "security", void 0);
    return TranslateProjectsLocationsOperationsWaitRequest;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsWaitRequest };
var TranslateProjectsLocationsOperationsWaitResponse = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsWaitResponse, _super);
    function TranslateProjectsLocationsOperationsWaitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsWaitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], TranslateProjectsLocationsOperationsWaitResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslateProjectsLocationsOperationsWaitResponse.prototype, "statusCode", void 0);
    return TranslateProjectsLocationsOperationsWaitResponse;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsWaitResponse };
