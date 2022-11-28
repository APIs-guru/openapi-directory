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
var ServiceusageOperationsDeletePathParams = /** @class */ (function (_super) {
    __extends(ServiceusageOperationsDeletePathParams, _super);
    function ServiceusageOperationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ServiceusageOperationsDeletePathParams.prototype, "name", void 0);
    return ServiceusageOperationsDeletePathParams;
}(SpeakeasyBase));
export { ServiceusageOperationsDeletePathParams };
var ServiceusageOperationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ServiceusageOperationsDeleteQueryParams, _super);
    function ServiceusageOperationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceusageOperationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceusageOperationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceusageOperationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceusageOperationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceusageOperationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceusageOperationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceusageOperationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceusageOperationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceusageOperationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceusageOperationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceusageOperationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ServiceusageOperationsDeleteQueryParams;
}(SpeakeasyBase));
export { ServiceusageOperationsDeleteQueryParams };
var ServiceusageOperationsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServiceusageOperationsDeleteSecurityOption1, _super);
    function ServiceusageOperationsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageOperationsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageOperationsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return ServiceusageOperationsDeleteSecurityOption1;
}(SpeakeasyBase));
export { ServiceusageOperationsDeleteSecurityOption1 };
var ServiceusageOperationsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServiceusageOperationsDeleteSecurityOption2, _super);
    function ServiceusageOperationsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageOperationsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageOperationsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return ServiceusageOperationsDeleteSecurityOption2;
}(SpeakeasyBase));
export { ServiceusageOperationsDeleteSecurityOption2 };
var ServiceusageOperationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ServiceusageOperationsDeleteSecurity, _super);
    function ServiceusageOperationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageOperationsDeleteSecurityOption1)
    ], ServiceusageOperationsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageOperationsDeleteSecurityOption2)
    ], ServiceusageOperationsDeleteSecurity.prototype, "option2", void 0);
    return ServiceusageOperationsDeleteSecurity;
}(SpeakeasyBase));
export { ServiceusageOperationsDeleteSecurity };
var ServiceusageOperationsDeleteRequest = /** @class */ (function (_super) {
    __extends(ServiceusageOperationsDeleteRequest, _super);
    function ServiceusageOperationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageOperationsDeletePathParams)
    ], ServiceusageOperationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageOperationsDeleteQueryParams)
    ], ServiceusageOperationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageOperationsDeleteSecurity)
    ], ServiceusageOperationsDeleteRequest.prototype, "security", void 0);
    return ServiceusageOperationsDeleteRequest;
}(SpeakeasyBase));
export { ServiceusageOperationsDeleteRequest };
var ServiceusageOperationsDeleteResponse = /** @class */ (function (_super) {
    __extends(ServiceusageOperationsDeleteResponse, _super);
    function ServiceusageOperationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServiceusageOperationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ServiceusageOperationsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServiceusageOperationsDeleteResponse.prototype, "statusCode", void 0);
    return ServiceusageOperationsDeleteResponse;
}(SpeakeasyBase));
export { ServiceusageOperationsDeleteResponse };
