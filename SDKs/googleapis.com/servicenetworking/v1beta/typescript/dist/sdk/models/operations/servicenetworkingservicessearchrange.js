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
var ServicenetworkingServicesSearchRangePathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesSearchRangePathParams, _super);
    function ServicenetworkingServicesSearchRangePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesSearchRangePathParams.prototype, "parent", void 0);
    return ServicenetworkingServicesSearchRangePathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesSearchRangePathParams };
var ServicenetworkingServicesSearchRangeQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesSearchRangeQueryParams, _super);
    function ServicenetworkingServicesSearchRangeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesSearchRangeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesSearchRangeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesSearchRangeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesSearchRangeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesSearchRangeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesSearchRangeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesSearchRangeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesSearchRangeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesSearchRangeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesSearchRangeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesSearchRangeQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesSearchRangeQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesSearchRangeQueryParams };
var ServicenetworkingServicesSearchRangeSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesSearchRangeSecurityOption1, _super);
    function ServicenetworkingServicesSearchRangeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesSearchRangeSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesSearchRangeSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesSearchRangeSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesSearchRangeSecurityOption1 };
var ServicenetworkingServicesSearchRangeSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesSearchRangeSecurityOption2, _super);
    function ServicenetworkingServicesSearchRangeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesSearchRangeSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesSearchRangeSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesSearchRangeSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesSearchRangeSecurityOption2 };
var ServicenetworkingServicesSearchRangeSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesSearchRangeSecurity, _super);
    function ServicenetworkingServicesSearchRangeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesSearchRangeSecurityOption1)
    ], ServicenetworkingServicesSearchRangeSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesSearchRangeSecurityOption2)
    ], ServicenetworkingServicesSearchRangeSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesSearchRangeSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesSearchRangeSecurity };
var ServicenetworkingServicesSearchRangeRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesSearchRangeRequest, _super);
    function ServicenetworkingServicesSearchRangeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesSearchRangePathParams)
    ], ServicenetworkingServicesSearchRangeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesSearchRangeQueryParams)
    ], ServicenetworkingServicesSearchRangeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SearchRangeRequest)
    ], ServicenetworkingServicesSearchRangeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesSearchRangeSecurity)
    ], ServicenetworkingServicesSearchRangeRequest.prototype, "security", void 0);
    return ServicenetworkingServicesSearchRangeRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesSearchRangeRequest };
var ServicenetworkingServicesSearchRangeResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesSearchRangeResponse, _super);
    function ServicenetworkingServicesSearchRangeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesSearchRangeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServicenetworkingServicesSearchRangeResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesSearchRangeResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesSearchRangeResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesSearchRangeResponse };
