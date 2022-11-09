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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CloudkmsProjectsLocationsEkmConnectionsCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsEkmConnectionsCreatePathParams, _super);
    function CloudkmsProjectsLocationsEkmConnectionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsCreatePathParams.prototype, "parent", void 0);
    return CloudkmsProjectsLocationsEkmConnectionsCreatePathParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsEkmConnectionsCreatePathParams };
var CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams, _super);
    function CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ekmConnectionId" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams.prototype, "ekmConnectionId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams };
var CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1, _super);
    function CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1 };
var CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2, _super);
    function CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2 };
var CloudkmsProjectsLocationsEkmConnectionsCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsEkmConnectionsCreateSecurity, _super);
    function CloudkmsProjectsLocationsEkmConnectionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateSecurity.prototype, "option2", void 0);
    return CloudkmsProjectsLocationsEkmConnectionsCreateSecurity;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsEkmConnectionsCreateSecurity };
var CloudkmsProjectsLocationsEkmConnectionsCreateRequest = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsEkmConnectionsCreateRequest, _super);
    function CloudkmsProjectsLocationsEkmConnectionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudkmsProjectsLocationsEkmConnectionsCreatePathParams)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EkmConnection)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudkmsProjectsLocationsEkmConnectionsCreateSecurity)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateRequest.prototype, "security", void 0);
    return CloudkmsProjectsLocationsEkmConnectionsCreateRequest;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsEkmConnectionsCreateRequest };
var CloudkmsProjectsLocationsEkmConnectionsCreateResponse = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsEkmConnectionsCreateResponse, _super);
    function CloudkmsProjectsLocationsEkmConnectionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.EkmConnection)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateResponse.prototype, "ekmConnection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsEkmConnectionsCreateResponse.prototype, "statusCode", void 0);
    return CloudkmsProjectsLocationsEkmConnectionsCreateResponse;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsEkmConnectionsCreateResponse };
