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
var SasportalNodesNodesDeploymentsCreatePathParams = /** @class */ (function (_super) {
    __extends(SasportalNodesNodesDeploymentsCreatePathParams, _super);
    function SasportalNodesNodesDeploymentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsCreatePathParams.prototype, "parent", void 0);
    return SasportalNodesNodesDeploymentsCreatePathParams;
}(SpeakeasyBase));
export { SasportalNodesNodesDeploymentsCreatePathParams };
var SasportalNodesNodesDeploymentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(SasportalNodesNodesDeploymentsCreateQueryParams, _super);
    function SasportalNodesNodesDeploymentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SasportalNodesNodesDeploymentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return SasportalNodesNodesDeploymentsCreateQueryParams;
}(SpeakeasyBase));
export { SasportalNodesNodesDeploymentsCreateQueryParams };
var SasportalNodesNodesDeploymentsCreateSecurity = /** @class */ (function (_super) {
    __extends(SasportalNodesNodesDeploymentsCreateSecurity, _super);
    function SasportalNodesNodesDeploymentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SasportalNodesNodesDeploymentsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SasportalNodesNodesDeploymentsCreateSecurity.prototype, "oauth2c", void 0);
    return SasportalNodesNodesDeploymentsCreateSecurity;
}(SpeakeasyBase));
export { SasportalNodesNodesDeploymentsCreateSecurity };
var SasportalNodesNodesDeploymentsCreateRequest = /** @class */ (function (_super) {
    __extends(SasportalNodesNodesDeploymentsCreateRequest, _super);
    function SasportalNodesNodesDeploymentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SasportalNodesNodesDeploymentsCreatePathParams)
    ], SasportalNodesNodesDeploymentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SasportalNodesNodesDeploymentsCreateQueryParams)
    ], SasportalNodesNodesDeploymentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SasPortalDeploymentInput)
    ], SasportalNodesNodesDeploymentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SasportalNodesNodesDeploymentsCreateSecurity)
    ], SasportalNodesNodesDeploymentsCreateRequest.prototype, "security", void 0);
    return SasportalNodesNodesDeploymentsCreateRequest;
}(SpeakeasyBase));
export { SasportalNodesNodesDeploymentsCreateRequest };
var SasportalNodesNodesDeploymentsCreateResponse = /** @class */ (function (_super) {
    __extends(SasportalNodesNodesDeploymentsCreateResponse, _super);
    function SasportalNodesNodesDeploymentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SasPortalDeployment)
    ], SasportalNodesNodesDeploymentsCreateResponse.prototype, "sasPortalDeployment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SasportalNodesNodesDeploymentsCreateResponse.prototype, "statusCode", void 0);
    return SasportalNodesNodesDeploymentsCreateResponse;
}(SpeakeasyBase));
export { SasportalNodesNodesDeploymentsCreateResponse };
