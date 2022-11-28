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
var CloudidentityInboundSsoAssignmentsGetPathParams = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSsoAssignmentsGetPathParams, _super);
    function CloudidentityInboundSsoAssignmentsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsGetPathParams.prototype, "name", void 0);
    return CloudidentityInboundSsoAssignmentsGetPathParams;
}(SpeakeasyBase));
export { CloudidentityInboundSsoAssignmentsGetPathParams };
var CloudidentityInboundSsoAssignmentsGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSsoAssignmentsGetQueryParams, _super);
    function CloudidentityInboundSsoAssignmentsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityInboundSsoAssignmentsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsGetQueryParams.prototype, "readMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityInboundSsoAssignmentsGetQueryParams;
}(SpeakeasyBase));
export { CloudidentityInboundSsoAssignmentsGetQueryParams };
var CloudidentityInboundSsoAssignmentsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSsoAssignmentsGetSecurityOption1, _super);
    function CloudidentityInboundSsoAssignmentsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityInboundSsoAssignmentsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityInboundSsoAssignmentsGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityInboundSsoAssignmentsGetSecurityOption1;
}(SpeakeasyBase));
export { CloudidentityInboundSsoAssignmentsGetSecurityOption1 };
var CloudidentityInboundSsoAssignmentsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSsoAssignmentsGetSecurityOption2, _super);
    function CloudidentityInboundSsoAssignmentsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityInboundSsoAssignmentsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityInboundSsoAssignmentsGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityInboundSsoAssignmentsGetSecurityOption2;
}(SpeakeasyBase));
export { CloudidentityInboundSsoAssignmentsGetSecurityOption2 };
var CloudidentityInboundSsoAssignmentsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSsoAssignmentsGetSecurityOption3, _super);
    function CloudidentityInboundSsoAssignmentsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityInboundSsoAssignmentsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityInboundSsoAssignmentsGetSecurityOption3.prototype, "oauth2c", void 0);
    return CloudidentityInboundSsoAssignmentsGetSecurityOption3;
}(SpeakeasyBase));
export { CloudidentityInboundSsoAssignmentsGetSecurityOption3 };
var CloudidentityInboundSsoAssignmentsGetSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSsoAssignmentsGetSecurity, _super);
    function CloudidentityInboundSsoAssignmentsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityInboundSsoAssignmentsGetSecurityOption1)
    ], CloudidentityInboundSsoAssignmentsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityInboundSsoAssignmentsGetSecurityOption2)
    ], CloudidentityInboundSsoAssignmentsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityInboundSsoAssignmentsGetSecurityOption3)
    ], CloudidentityInboundSsoAssignmentsGetSecurity.prototype, "option3", void 0);
    return CloudidentityInboundSsoAssignmentsGetSecurity;
}(SpeakeasyBase));
export { CloudidentityInboundSsoAssignmentsGetSecurity };
var CloudidentityInboundSsoAssignmentsGetRequest = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSsoAssignmentsGetRequest, _super);
    function CloudidentityInboundSsoAssignmentsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityInboundSsoAssignmentsGetPathParams)
    ], CloudidentityInboundSsoAssignmentsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityInboundSsoAssignmentsGetQueryParams)
    ], CloudidentityInboundSsoAssignmentsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityInboundSsoAssignmentsGetSecurity)
    ], CloudidentityInboundSsoAssignmentsGetRequest.prototype, "security", void 0);
    return CloudidentityInboundSsoAssignmentsGetRequest;
}(SpeakeasyBase));
export { CloudidentityInboundSsoAssignmentsGetRequest };
var CloudidentityInboundSsoAssignmentsGetResponse = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSsoAssignmentsGetResponse, _super);
    function CloudidentityInboundSsoAssignmentsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudidentityInboundSsoAssignmentsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InboundSsoAssignment)
    ], CloudidentityInboundSsoAssignmentsGetResponse.prototype, "inboundSsoAssignment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudidentityInboundSsoAssignmentsGetResponse.prototype, "statusCode", void 0);
    return CloudidentityInboundSsoAssignmentsGetResponse;
}(SpeakeasyBase));
export { CloudidentityInboundSsoAssignmentsGetResponse };
