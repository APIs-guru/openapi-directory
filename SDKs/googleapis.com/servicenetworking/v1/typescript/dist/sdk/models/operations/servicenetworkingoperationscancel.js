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
var ServicenetworkingOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingOperationsCancelPathParams, _super);
    function ServicenetworkingOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsCancelPathParams.prototype, "name", void 0);
    return ServicenetworkingOperationsCancelPathParams;
}(SpeakeasyBase));
export { ServicenetworkingOperationsCancelPathParams };
var ServicenetworkingOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingOperationsCancelQueryParams, _super);
    function ServicenetworkingOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingOperationsCancelQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingOperationsCancelQueryParams };
var ServicenetworkingOperationsCancelSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingOperationsCancelSecurityOption1, _super);
    function ServicenetworkingOperationsCancelSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingOperationsCancelSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingOperationsCancelSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingOperationsCancelSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingOperationsCancelSecurityOption1 };
var ServicenetworkingOperationsCancelSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingOperationsCancelSecurityOption2, _super);
    function ServicenetworkingOperationsCancelSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingOperationsCancelSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingOperationsCancelSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingOperationsCancelSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingOperationsCancelSecurityOption2 };
var ServicenetworkingOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingOperationsCancelSecurity, _super);
    function ServicenetworkingOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingOperationsCancelSecurityOption1)
    ], ServicenetworkingOperationsCancelSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingOperationsCancelSecurityOption2)
    ], ServicenetworkingOperationsCancelSecurity.prototype, "option2", void 0);
    return ServicenetworkingOperationsCancelSecurity;
}(SpeakeasyBase));
export { ServicenetworkingOperationsCancelSecurity };
var ServicenetworkingOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingOperationsCancelRequest, _super);
    function ServicenetworkingOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingOperationsCancelPathParams)
    ], ServicenetworkingOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingOperationsCancelQueryParams)
    ], ServicenetworkingOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], ServicenetworkingOperationsCancelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingOperationsCancelSecurity)
    ], ServicenetworkingOperationsCancelRequest.prototype, "security", void 0);
    return ServicenetworkingOperationsCancelRequest;
}(SpeakeasyBase));
export { ServicenetworkingOperationsCancelRequest };
var ServicenetworkingOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingOperationsCancelResponse, _super);
    function ServicenetworkingOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ServicenetworkingOperationsCancelResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingOperationsCancelResponse.prototype, "statusCode", void 0);
    return ServicenetworkingOperationsCancelResponse;
}(SpeakeasyBase));
export { ServicenetworkingOperationsCancelResponse };
