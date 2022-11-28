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
var RuntimeconfigOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsCancelPathParams, _super);
    function RuntimeconfigOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsCancelPathParams.prototype, "name", void 0);
    return RuntimeconfigOperationsCancelPathParams;
}(SpeakeasyBase));
export { RuntimeconfigOperationsCancelPathParams };
var RuntimeconfigOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsCancelQueryParams, _super);
    function RuntimeconfigOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RuntimeconfigOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return RuntimeconfigOperationsCancelQueryParams;
}(SpeakeasyBase));
export { RuntimeconfigOperationsCancelQueryParams };
var RuntimeconfigOperationsCancelSecurityOption1 = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsCancelSecurityOption1, _super);
    function RuntimeconfigOperationsCancelSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigOperationsCancelSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigOperationsCancelSecurityOption1.prototype, "oauth2c", void 0);
    return RuntimeconfigOperationsCancelSecurityOption1;
}(SpeakeasyBase));
export { RuntimeconfigOperationsCancelSecurityOption1 };
var RuntimeconfigOperationsCancelSecurityOption2 = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsCancelSecurityOption2, _super);
    function RuntimeconfigOperationsCancelSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigOperationsCancelSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigOperationsCancelSecurityOption2.prototype, "oauth2c", void 0);
    return RuntimeconfigOperationsCancelSecurityOption2;
}(SpeakeasyBase));
export { RuntimeconfigOperationsCancelSecurityOption2 };
var RuntimeconfigOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsCancelSecurity, _super);
    function RuntimeconfigOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigOperationsCancelSecurityOption1)
    ], RuntimeconfigOperationsCancelSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigOperationsCancelSecurityOption2)
    ], RuntimeconfigOperationsCancelSecurity.prototype, "option2", void 0);
    return RuntimeconfigOperationsCancelSecurity;
}(SpeakeasyBase));
export { RuntimeconfigOperationsCancelSecurity };
var RuntimeconfigOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsCancelRequest, _super);
    function RuntimeconfigOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigOperationsCancelPathParams)
    ], RuntimeconfigOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigOperationsCancelQueryParams)
    ], RuntimeconfigOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], RuntimeconfigOperationsCancelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigOperationsCancelSecurity)
    ], RuntimeconfigOperationsCancelRequest.prototype, "security", void 0);
    return RuntimeconfigOperationsCancelRequest;
}(SpeakeasyBase));
export { RuntimeconfigOperationsCancelRequest };
var RuntimeconfigOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsCancelResponse, _super);
    function RuntimeconfigOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], RuntimeconfigOperationsCancelResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RuntimeconfigOperationsCancelResponse.prototype, "statusCode", void 0);
    return RuntimeconfigOperationsCancelResponse;
}(SpeakeasyBase));
export { RuntimeconfigOperationsCancelResponse };
