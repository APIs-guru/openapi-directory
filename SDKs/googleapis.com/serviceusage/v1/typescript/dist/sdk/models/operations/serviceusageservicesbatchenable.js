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
var ServiceusageServicesBatchEnablePathParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesBatchEnablePathParams, _super);
    function ServiceusageServicesBatchEnablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchEnablePathParams.prototype, "parent", void 0);
    return ServiceusageServicesBatchEnablePathParams;
}(SpeakeasyBase));
export { ServiceusageServicesBatchEnablePathParams };
var ServiceusageServicesBatchEnableQueryParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesBatchEnableQueryParams, _super);
    function ServiceusageServicesBatchEnableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchEnableQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchEnableQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchEnableQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchEnableQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchEnableQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchEnableQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchEnableQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceusageServicesBatchEnableQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchEnableQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchEnableQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchEnableQueryParams.prototype, "uploadProtocol", void 0);
    return ServiceusageServicesBatchEnableQueryParams;
}(SpeakeasyBase));
export { ServiceusageServicesBatchEnableQueryParams };
var ServiceusageServicesBatchEnableSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesBatchEnableSecurityOption1, _super);
    function ServiceusageServicesBatchEnableSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesBatchEnableSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesBatchEnableSecurityOption1.prototype, "oauth2c", void 0);
    return ServiceusageServicesBatchEnableSecurityOption1;
}(SpeakeasyBase));
export { ServiceusageServicesBatchEnableSecurityOption1 };
var ServiceusageServicesBatchEnableSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesBatchEnableSecurityOption2, _super);
    function ServiceusageServicesBatchEnableSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesBatchEnableSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesBatchEnableSecurityOption2.prototype, "oauth2c", void 0);
    return ServiceusageServicesBatchEnableSecurityOption2;
}(SpeakeasyBase));
export { ServiceusageServicesBatchEnableSecurityOption2 };
var ServiceusageServicesBatchEnableSecurity = /** @class */ (function (_super) {
    __extends(ServiceusageServicesBatchEnableSecurity, _super);
    function ServiceusageServicesBatchEnableSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesBatchEnableSecurityOption1)
    ], ServiceusageServicesBatchEnableSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesBatchEnableSecurityOption2)
    ], ServiceusageServicesBatchEnableSecurity.prototype, "option2", void 0);
    return ServiceusageServicesBatchEnableSecurity;
}(SpeakeasyBase));
export { ServiceusageServicesBatchEnableSecurity };
var ServiceusageServicesBatchEnableRequest = /** @class */ (function (_super) {
    __extends(ServiceusageServicesBatchEnableRequest, _super);
    function ServiceusageServicesBatchEnableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesBatchEnablePathParams)
    ], ServiceusageServicesBatchEnableRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesBatchEnableQueryParams)
    ], ServiceusageServicesBatchEnableRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchEnableServicesRequest)
    ], ServiceusageServicesBatchEnableRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesBatchEnableSecurity)
    ], ServiceusageServicesBatchEnableRequest.prototype, "security", void 0);
    return ServiceusageServicesBatchEnableRequest;
}(SpeakeasyBase));
export { ServiceusageServicesBatchEnableRequest };
var ServiceusageServicesBatchEnableResponse = /** @class */ (function (_super) {
    __extends(ServiceusageServicesBatchEnableResponse, _super);
    function ServiceusageServicesBatchEnableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchEnableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServiceusageServicesBatchEnableResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServiceusageServicesBatchEnableResponse.prototype, "statusCode", void 0);
    return ServiceusageServicesBatchEnableResponse;
}(SpeakeasyBase));
export { ServiceusageServicesBatchEnableResponse };
