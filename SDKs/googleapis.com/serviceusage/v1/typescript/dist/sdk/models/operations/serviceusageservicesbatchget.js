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
var ServiceusageServicesBatchGetPathParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesBatchGetPathParams, _super);
    function ServiceusageServicesBatchGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchGetPathParams.prototype, "parent", void 0);
    return ServiceusageServicesBatchGetPathParams;
}(SpeakeasyBase));
export { ServiceusageServicesBatchGetPathParams };
var ServiceusageServicesBatchGetQueryParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesBatchGetQueryParams, _super);
    function ServiceusageServicesBatchGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=names" }),
        __metadata("design:type", Array)
    ], ServiceusageServicesBatchGetQueryParams.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceusageServicesBatchGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchGetQueryParams.prototype, "uploadProtocol", void 0);
    return ServiceusageServicesBatchGetQueryParams;
}(SpeakeasyBase));
export { ServiceusageServicesBatchGetQueryParams };
var ServiceusageServicesBatchGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesBatchGetSecurityOption1, _super);
    function ServiceusageServicesBatchGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesBatchGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesBatchGetSecurityOption1.prototype, "oauth2c", void 0);
    return ServiceusageServicesBatchGetSecurityOption1;
}(SpeakeasyBase));
export { ServiceusageServicesBatchGetSecurityOption1 };
var ServiceusageServicesBatchGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesBatchGetSecurityOption2, _super);
    function ServiceusageServicesBatchGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesBatchGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesBatchGetSecurityOption2.prototype, "oauth2c", void 0);
    return ServiceusageServicesBatchGetSecurityOption2;
}(SpeakeasyBase));
export { ServiceusageServicesBatchGetSecurityOption2 };
var ServiceusageServicesBatchGetSecurity = /** @class */ (function (_super) {
    __extends(ServiceusageServicesBatchGetSecurity, _super);
    function ServiceusageServicesBatchGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesBatchGetSecurityOption1)
    ], ServiceusageServicesBatchGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesBatchGetSecurityOption2)
    ], ServiceusageServicesBatchGetSecurity.prototype, "option2", void 0);
    return ServiceusageServicesBatchGetSecurity;
}(SpeakeasyBase));
export { ServiceusageServicesBatchGetSecurity };
var ServiceusageServicesBatchGetRequest = /** @class */ (function (_super) {
    __extends(ServiceusageServicesBatchGetRequest, _super);
    function ServiceusageServicesBatchGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesBatchGetPathParams)
    ], ServiceusageServicesBatchGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesBatchGetQueryParams)
    ], ServiceusageServicesBatchGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesBatchGetSecurity)
    ], ServiceusageServicesBatchGetRequest.prototype, "security", void 0);
    return ServiceusageServicesBatchGetRequest;
}(SpeakeasyBase));
export { ServiceusageServicesBatchGetRequest };
var ServiceusageServicesBatchGetResponse = /** @class */ (function (_super) {
    __extends(ServiceusageServicesBatchGetResponse, _super);
    function ServiceusageServicesBatchGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchGetServicesResponse)
    ], ServiceusageServicesBatchGetResponse.prototype, "batchGetServicesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServiceusageServicesBatchGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServiceusageServicesBatchGetResponse.prototype, "statusCode", void 0);
    return ServiceusageServicesBatchGetResponse;
}(SpeakeasyBase));
export { ServiceusageServicesBatchGetResponse };
