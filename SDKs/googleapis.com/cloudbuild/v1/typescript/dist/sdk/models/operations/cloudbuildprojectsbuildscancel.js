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
var CloudbuildProjectsBuildsCancelPathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsBuildsCancelPathParams, _super);
    function CloudbuildProjectsBuildsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsCancelPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsCancelPathParams.prototype, "projectId", void 0);
    return CloudbuildProjectsBuildsCancelPathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsBuildsCancelPathParams };
var CloudbuildProjectsBuildsCancelQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsBuildsCancelQueryParams, _super);
    function CloudbuildProjectsBuildsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsBuildsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbuildProjectsBuildsCancelQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsBuildsCancelQueryParams };
var CloudbuildProjectsBuildsCancelSecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsBuildsCancelSecurity, _super);
    function CloudbuildProjectsBuildsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsBuildsCancelSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsBuildsCancelSecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsBuildsCancelSecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsBuildsCancelSecurity };
var CloudbuildProjectsBuildsCancelRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsBuildsCancelRequest, _super);
    function CloudbuildProjectsBuildsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsBuildsCancelPathParams)
    ], CloudbuildProjectsBuildsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsBuildsCancelQueryParams)
    ], CloudbuildProjectsBuildsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CancelBuildRequest)
    ], CloudbuildProjectsBuildsCancelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsBuildsCancelSecurity)
    ], CloudbuildProjectsBuildsCancelRequest.prototype, "security", void 0);
    return CloudbuildProjectsBuildsCancelRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsBuildsCancelRequest };
var CloudbuildProjectsBuildsCancelResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsBuildsCancelResponse, _super);
    function CloudbuildProjectsBuildsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Build)
    ], CloudbuildProjectsBuildsCancelResponse.prototype, "build", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsBuildsCancelResponse.prototype, "statusCode", void 0);
    return CloudbuildProjectsBuildsCancelResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsBuildsCancelResponse };
