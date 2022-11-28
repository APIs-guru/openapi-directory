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
var TranslateProjectsLocationsOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsCancelPathParams, _super);
    function TranslateProjectsLocationsOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsCancelPathParams.prototype, "name", void 0);
    return TranslateProjectsLocationsOperationsCancelPathParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsCancelPathParams };
var TranslateProjectsLocationsOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsCancelQueryParams, _super);
    function TranslateProjectsLocationsOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TranslateProjectsLocationsOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return TranslateProjectsLocationsOperationsCancelQueryParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsCancelQueryParams };
var TranslateProjectsLocationsOperationsCancelSecurityOption1 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsCancelSecurityOption1, _super);
    function TranslateProjectsLocationsOperationsCancelSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsOperationsCancelSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsOperationsCancelSecurityOption1.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsOperationsCancelSecurityOption1;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsCancelSecurityOption1 };
var TranslateProjectsLocationsOperationsCancelSecurityOption2 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsCancelSecurityOption2, _super);
    function TranslateProjectsLocationsOperationsCancelSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsOperationsCancelSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsOperationsCancelSecurityOption2.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsOperationsCancelSecurityOption2;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsCancelSecurityOption2 };
var TranslateProjectsLocationsOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsCancelSecurity, _super);
    function TranslateProjectsLocationsOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsOperationsCancelSecurityOption1)
    ], TranslateProjectsLocationsOperationsCancelSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsOperationsCancelSecurityOption2)
    ], TranslateProjectsLocationsOperationsCancelSecurity.prototype, "option2", void 0);
    return TranslateProjectsLocationsOperationsCancelSecurity;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsCancelSecurity };
var TranslateProjectsLocationsOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsCancelRequest, _super);
    function TranslateProjectsLocationsOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsOperationsCancelPathParams)
    ], TranslateProjectsLocationsOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsOperationsCancelQueryParams)
    ], TranslateProjectsLocationsOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], TranslateProjectsLocationsOperationsCancelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsOperationsCancelSecurity)
    ], TranslateProjectsLocationsOperationsCancelRequest.prototype, "security", void 0);
    return TranslateProjectsLocationsOperationsCancelRequest;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsCancelRequest };
var TranslateProjectsLocationsOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsCancelResponse, _super);
    function TranslateProjectsLocationsOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TranslateProjectsLocationsOperationsCancelResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslateProjectsLocationsOperationsCancelResponse.prototype, "statusCode", void 0);
    return TranslateProjectsLocationsOperationsCancelResponse;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsCancelResponse };
