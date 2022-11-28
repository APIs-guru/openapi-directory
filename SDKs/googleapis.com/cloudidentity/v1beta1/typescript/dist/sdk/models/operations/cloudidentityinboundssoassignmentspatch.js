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
var CloudidentityInboundSsoAssignmentsPatchPathParams = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSsoAssignmentsPatchPathParams, _super);
    function CloudidentityInboundSsoAssignmentsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsPatchPathParams.prototype, "name", void 0);
    return CloudidentityInboundSsoAssignmentsPatchPathParams;
}(SpeakeasyBase));
export { CloudidentityInboundSsoAssignmentsPatchPathParams };
var CloudidentityInboundSsoAssignmentsPatchQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSsoAssignmentsPatchQueryParams, _super);
    function CloudidentityInboundSsoAssignmentsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityInboundSsoAssignmentsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityInboundSsoAssignmentsPatchQueryParams;
}(SpeakeasyBase));
export { CloudidentityInboundSsoAssignmentsPatchQueryParams };
var CloudidentityInboundSsoAssignmentsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSsoAssignmentsPatchSecurityOption1, _super);
    function CloudidentityInboundSsoAssignmentsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityInboundSsoAssignmentsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityInboundSsoAssignmentsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityInboundSsoAssignmentsPatchSecurityOption1;
}(SpeakeasyBase));
export { CloudidentityInboundSsoAssignmentsPatchSecurityOption1 };
var CloudidentityInboundSsoAssignmentsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSsoAssignmentsPatchSecurityOption2, _super);
    function CloudidentityInboundSsoAssignmentsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityInboundSsoAssignmentsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityInboundSsoAssignmentsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityInboundSsoAssignmentsPatchSecurityOption2;
}(SpeakeasyBase));
export { CloudidentityInboundSsoAssignmentsPatchSecurityOption2 };
var CloudidentityInboundSsoAssignmentsPatchSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSsoAssignmentsPatchSecurity, _super);
    function CloudidentityInboundSsoAssignmentsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityInboundSsoAssignmentsPatchSecurityOption1)
    ], CloudidentityInboundSsoAssignmentsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityInboundSsoAssignmentsPatchSecurityOption2)
    ], CloudidentityInboundSsoAssignmentsPatchSecurity.prototype, "option2", void 0);
    return CloudidentityInboundSsoAssignmentsPatchSecurity;
}(SpeakeasyBase));
export { CloudidentityInboundSsoAssignmentsPatchSecurity };
var CloudidentityInboundSsoAssignmentsPatchRequest = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSsoAssignmentsPatchRequest, _super);
    function CloudidentityInboundSsoAssignmentsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityInboundSsoAssignmentsPatchPathParams)
    ], CloudidentityInboundSsoAssignmentsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityInboundSsoAssignmentsPatchQueryParams)
    ], CloudidentityInboundSsoAssignmentsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.InboundSsoAssignmentInput)
    ], CloudidentityInboundSsoAssignmentsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityInboundSsoAssignmentsPatchSecurity)
    ], CloudidentityInboundSsoAssignmentsPatchRequest.prototype, "security", void 0);
    return CloudidentityInboundSsoAssignmentsPatchRequest;
}(SpeakeasyBase));
export { CloudidentityInboundSsoAssignmentsPatchRequest };
var CloudidentityInboundSsoAssignmentsPatchResponse = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSsoAssignmentsPatchResponse, _super);
    function CloudidentityInboundSsoAssignmentsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudidentityInboundSsoAssignmentsPatchResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudidentityInboundSsoAssignmentsPatchResponse.prototype, "statusCode", void 0);
    return CloudidentityInboundSsoAssignmentsPatchResponse;
}(SpeakeasyBase));
export { CloudidentityInboundSsoAssignmentsPatchResponse };
