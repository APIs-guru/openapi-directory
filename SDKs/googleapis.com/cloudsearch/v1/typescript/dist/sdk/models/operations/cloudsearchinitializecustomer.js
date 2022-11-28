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
var CloudsearchInitializeCustomerQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchInitializeCustomerQueryParams, _super);
    function CloudsearchInitializeCustomerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchInitializeCustomerQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchInitializeCustomerQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchInitializeCustomerQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchInitializeCustomerQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchInitializeCustomerQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchInitializeCustomerQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchInitializeCustomerQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchInitializeCustomerQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchInitializeCustomerQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchInitializeCustomerQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchInitializeCustomerQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchInitializeCustomerQueryParams;
}(SpeakeasyBase));
export { CloudsearchInitializeCustomerQueryParams };
var CloudsearchInitializeCustomerSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchInitializeCustomerSecurityOption1, _super);
    function CloudsearchInitializeCustomerSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchInitializeCustomerSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchInitializeCustomerSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchInitializeCustomerSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchInitializeCustomerSecurityOption1 };
var CloudsearchInitializeCustomerSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchInitializeCustomerSecurityOption2, _super);
    function CloudsearchInitializeCustomerSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchInitializeCustomerSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchInitializeCustomerSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchInitializeCustomerSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchInitializeCustomerSecurityOption2 };
var CloudsearchInitializeCustomerSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchInitializeCustomerSecurityOption3, _super);
    function CloudsearchInitializeCustomerSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchInitializeCustomerSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchInitializeCustomerSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchInitializeCustomerSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchInitializeCustomerSecurityOption3 };
var CloudsearchInitializeCustomerSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchInitializeCustomerSecurity, _super);
    function CloudsearchInitializeCustomerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchInitializeCustomerSecurityOption1)
    ], CloudsearchInitializeCustomerSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchInitializeCustomerSecurityOption2)
    ], CloudsearchInitializeCustomerSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchInitializeCustomerSecurityOption3)
    ], CloudsearchInitializeCustomerSecurity.prototype, "option3", void 0);
    return CloudsearchInitializeCustomerSecurity;
}(SpeakeasyBase));
export { CloudsearchInitializeCustomerSecurity };
var CloudsearchInitializeCustomerRequest = /** @class */ (function (_super) {
    __extends(CloudsearchInitializeCustomerRequest, _super);
    function CloudsearchInitializeCustomerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchInitializeCustomerQueryParams)
    ], CloudsearchInitializeCustomerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], CloudsearchInitializeCustomerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchInitializeCustomerSecurity)
    ], CloudsearchInitializeCustomerRequest.prototype, "security", void 0);
    return CloudsearchInitializeCustomerRequest;
}(SpeakeasyBase));
export { CloudsearchInitializeCustomerRequest };
var CloudsearchInitializeCustomerResponse = /** @class */ (function (_super) {
    __extends(CloudsearchInitializeCustomerResponse, _super);
    function CloudsearchInitializeCustomerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchInitializeCustomerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudsearchInitializeCustomerResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchInitializeCustomerResponse.prototype, "statusCode", void 0);
    return CloudsearchInitializeCustomerResponse;
}(SpeakeasyBase));
export { CloudsearchInitializeCustomerResponse };
