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
var OsconfigProjectsPatchDeploymentsPausePathParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchDeploymentsPausePathParams, _super);
    function OsconfigProjectsPatchDeploymentsPausePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsPausePathParams.prototype, "name", void 0);
    return OsconfigProjectsPatchDeploymentsPausePathParams;
}(SpeakeasyBase));
export { OsconfigProjectsPatchDeploymentsPausePathParams };
var OsconfigProjectsPatchDeploymentsPauseQueryParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchDeploymentsPauseQueryParams, _super);
    function OsconfigProjectsPatchDeploymentsPauseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsPauseQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsPauseQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsPauseQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsPauseQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsPauseQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsPauseQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsPauseQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsconfigProjectsPatchDeploymentsPauseQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsPauseQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsPauseQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsPauseQueryParams.prototype, "uploadProtocol", void 0);
    return OsconfigProjectsPatchDeploymentsPauseQueryParams;
}(SpeakeasyBase));
export { OsconfigProjectsPatchDeploymentsPauseQueryParams };
var OsconfigProjectsPatchDeploymentsPauseSecurity = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchDeploymentsPauseSecurity, _super);
    function OsconfigProjectsPatchDeploymentsPauseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsconfigProjectsPatchDeploymentsPauseSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsconfigProjectsPatchDeploymentsPauseSecurity.prototype, "oauth2c", void 0);
    return OsconfigProjectsPatchDeploymentsPauseSecurity;
}(SpeakeasyBase));
export { OsconfigProjectsPatchDeploymentsPauseSecurity };
var OsconfigProjectsPatchDeploymentsPauseRequest = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchDeploymentsPauseRequest, _super);
    function OsconfigProjectsPatchDeploymentsPauseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsPatchDeploymentsPausePathParams)
    ], OsconfigProjectsPatchDeploymentsPauseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsPatchDeploymentsPauseQueryParams)
    ], OsconfigProjectsPatchDeploymentsPauseRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], OsconfigProjectsPatchDeploymentsPauseRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsPatchDeploymentsPauseSecurity)
    ], OsconfigProjectsPatchDeploymentsPauseRequest.prototype, "security", void 0);
    return OsconfigProjectsPatchDeploymentsPauseRequest;
}(SpeakeasyBase));
export { OsconfigProjectsPatchDeploymentsPauseRequest };
var OsconfigProjectsPatchDeploymentsPauseResponse = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchDeploymentsPauseResponse, _super);
    function OsconfigProjectsPatchDeploymentsPauseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsPauseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PatchDeployment)
    ], OsconfigProjectsPatchDeploymentsPauseResponse.prototype, "patchDeployment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OsconfigProjectsPatchDeploymentsPauseResponse.prototype, "statusCode", void 0);
    return OsconfigProjectsPatchDeploymentsPauseResponse;
}(SpeakeasyBase));
export { OsconfigProjectsPatchDeploymentsPauseResponse };
