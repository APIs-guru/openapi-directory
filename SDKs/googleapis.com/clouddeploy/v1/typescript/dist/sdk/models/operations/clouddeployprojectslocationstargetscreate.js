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
var ClouddeployProjectsLocationsTargetsCreatePathParams = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsTargetsCreatePathParams, _super);
    function ClouddeployProjectsLocationsTargetsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsCreatePathParams.prototype, "parent", void 0);
    return ClouddeployProjectsLocationsTargetsCreatePathParams;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsTargetsCreatePathParams };
var ClouddeployProjectsLocationsTargetsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsTargetsCreateQueryParams, _super);
    function ClouddeployProjectsLocationsTargetsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouddeployProjectsLocationsTargetsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=targetId" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsCreateQueryParams.prototype, "targetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], ClouddeployProjectsLocationsTargetsCreateQueryParams.prototype, "validateOnly", void 0);
    return ClouddeployProjectsLocationsTargetsCreateQueryParams;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsTargetsCreateQueryParams };
var ClouddeployProjectsLocationsTargetsCreateSecurity = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsTargetsCreateSecurity, _super);
    function ClouddeployProjectsLocationsTargetsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddeployProjectsLocationsTargetsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddeployProjectsLocationsTargetsCreateSecurity.prototype, "oauth2c", void 0);
    return ClouddeployProjectsLocationsTargetsCreateSecurity;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsTargetsCreateSecurity };
var ClouddeployProjectsLocationsTargetsCreateRequest = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsTargetsCreateRequest, _super);
    function ClouddeployProjectsLocationsTargetsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddeployProjectsLocationsTargetsCreatePathParams)
    ], ClouddeployProjectsLocationsTargetsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddeployProjectsLocationsTargetsCreateQueryParams)
    ], ClouddeployProjectsLocationsTargetsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TargetInput)
    ], ClouddeployProjectsLocationsTargetsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddeployProjectsLocationsTargetsCreateSecurity)
    ], ClouddeployProjectsLocationsTargetsCreateRequest.prototype, "security", void 0);
    return ClouddeployProjectsLocationsTargetsCreateRequest;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsTargetsCreateRequest };
var ClouddeployProjectsLocationsTargetsCreateResponse = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsTargetsCreateResponse, _super);
    function ClouddeployProjectsLocationsTargetsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsTargetsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ClouddeployProjectsLocationsTargetsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClouddeployProjectsLocationsTargetsCreateResponse.prototype, "statusCode", void 0);
    return ClouddeployProjectsLocationsTargetsCreateResponse;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsTargetsCreateResponse };
