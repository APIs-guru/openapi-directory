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
var RunNamespacesServicesReplaceServicePathParams = /** @class */ (function (_super) {
    __extends(RunNamespacesServicesReplaceServicePathParams, _super);
    function RunNamespacesServicesReplaceServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RunNamespacesServicesReplaceServicePathParams.prototype, "name", void 0);
    return RunNamespacesServicesReplaceServicePathParams;
}(SpeakeasyBase));
export { RunNamespacesServicesReplaceServicePathParams };
var RunNamespacesServicesReplaceServiceQueryParams = /** @class */ (function (_super) {
    __extends(RunNamespacesServicesReplaceServiceQueryParams, _super);
    function RunNamespacesServicesReplaceServiceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RunNamespacesServicesReplaceServiceQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RunNamespacesServicesReplaceServiceQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RunNamespacesServicesReplaceServiceQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RunNamespacesServicesReplaceServiceQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dryRun" }),
        __metadata("design:type", String)
    ], RunNamespacesServicesReplaceServiceQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RunNamespacesServicesReplaceServiceQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RunNamespacesServicesReplaceServiceQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RunNamespacesServicesReplaceServiceQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RunNamespacesServicesReplaceServiceQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RunNamespacesServicesReplaceServiceQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RunNamespacesServicesReplaceServiceQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RunNamespacesServicesReplaceServiceQueryParams.prototype, "uploadProtocol", void 0);
    return RunNamespacesServicesReplaceServiceQueryParams;
}(SpeakeasyBase));
export { RunNamespacesServicesReplaceServiceQueryParams };
var RunNamespacesServicesReplaceServiceSecurity = /** @class */ (function (_super) {
    __extends(RunNamespacesServicesReplaceServiceSecurity, _super);
    function RunNamespacesServicesReplaceServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RunNamespacesServicesReplaceServiceSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RunNamespacesServicesReplaceServiceSecurity.prototype, "oauth2c", void 0);
    return RunNamespacesServicesReplaceServiceSecurity;
}(SpeakeasyBase));
export { RunNamespacesServicesReplaceServiceSecurity };
var RunNamespacesServicesReplaceServiceRequest = /** @class */ (function (_super) {
    __extends(RunNamespacesServicesReplaceServiceRequest, _super);
    function RunNamespacesServicesReplaceServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunNamespacesServicesReplaceServicePathParams)
    ], RunNamespacesServicesReplaceServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunNamespacesServicesReplaceServiceQueryParams)
    ], RunNamespacesServicesReplaceServiceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ServiceInput)
    ], RunNamespacesServicesReplaceServiceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunNamespacesServicesReplaceServiceSecurity)
    ], RunNamespacesServicesReplaceServiceRequest.prototype, "security", void 0);
    return RunNamespacesServicesReplaceServiceRequest;
}(SpeakeasyBase));
export { RunNamespacesServicesReplaceServiceRequest };
var RunNamespacesServicesReplaceServiceResponse = /** @class */ (function (_super) {
    __extends(RunNamespacesServicesReplaceServiceResponse, _super);
    function RunNamespacesServicesReplaceServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RunNamespacesServicesReplaceServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Service)
    ], RunNamespacesServicesReplaceServiceResponse.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RunNamespacesServicesReplaceServiceResponse.prototype, "statusCode", void 0);
    return RunNamespacesServicesReplaceServiceResponse;
}(SpeakeasyBase));
export { RunNamespacesServicesReplaceServiceResponse };
