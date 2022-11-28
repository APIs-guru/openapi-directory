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
var OsconfigProjectsPatchDeploymentsResumePathParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchDeploymentsResumePathParams, _super);
    function OsconfigProjectsPatchDeploymentsResumePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsResumePathParams.prototype, "name", void 0);
    return OsconfigProjectsPatchDeploymentsResumePathParams;
}(SpeakeasyBase));
export { OsconfigProjectsPatchDeploymentsResumePathParams };
var OsconfigProjectsPatchDeploymentsResumeQueryParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchDeploymentsResumeQueryParams, _super);
    function OsconfigProjectsPatchDeploymentsResumeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsResumeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsResumeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsResumeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsResumeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsResumeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsResumeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsResumeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsconfigProjectsPatchDeploymentsResumeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsResumeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsResumeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsResumeQueryParams.prototype, "uploadProtocol", void 0);
    return OsconfigProjectsPatchDeploymentsResumeQueryParams;
}(SpeakeasyBase));
export { OsconfigProjectsPatchDeploymentsResumeQueryParams };
var OsconfigProjectsPatchDeploymentsResumeSecurity = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchDeploymentsResumeSecurity, _super);
    function OsconfigProjectsPatchDeploymentsResumeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsconfigProjectsPatchDeploymentsResumeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsconfigProjectsPatchDeploymentsResumeSecurity.prototype, "oauth2c", void 0);
    return OsconfigProjectsPatchDeploymentsResumeSecurity;
}(SpeakeasyBase));
export { OsconfigProjectsPatchDeploymentsResumeSecurity };
var OsconfigProjectsPatchDeploymentsResumeRequest = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchDeploymentsResumeRequest, _super);
    function OsconfigProjectsPatchDeploymentsResumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsPatchDeploymentsResumePathParams)
    ], OsconfigProjectsPatchDeploymentsResumeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsPatchDeploymentsResumeQueryParams)
    ], OsconfigProjectsPatchDeploymentsResumeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], OsconfigProjectsPatchDeploymentsResumeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsPatchDeploymentsResumeSecurity)
    ], OsconfigProjectsPatchDeploymentsResumeRequest.prototype, "security", void 0);
    return OsconfigProjectsPatchDeploymentsResumeRequest;
}(SpeakeasyBase));
export { OsconfigProjectsPatchDeploymentsResumeRequest };
var OsconfigProjectsPatchDeploymentsResumeResponse = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchDeploymentsResumeResponse, _super);
    function OsconfigProjectsPatchDeploymentsResumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsResumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PatchDeployment)
    ], OsconfigProjectsPatchDeploymentsResumeResponse.prototype, "patchDeployment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OsconfigProjectsPatchDeploymentsResumeResponse.prototype, "statusCode", void 0);
    return OsconfigProjectsPatchDeploymentsResumeResponse;
}(SpeakeasyBase));
export { OsconfigProjectsPatchDeploymentsResumeResponse };
