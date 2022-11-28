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
var ProdTtSasportalNodesNodesDeploymentsCreatePathParams = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesNodesDeploymentsCreatePathParams, _super);
    function ProdTtSasportalNodesNodesDeploymentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeploymentsCreatePathParams.prototype, "parent", void 0);
    return ProdTtSasportalNodesNodesDeploymentsCreatePathParams;
}(SpeakeasyBase));
export { ProdTtSasportalNodesNodesDeploymentsCreatePathParams };
var ProdTtSasportalNodesNodesDeploymentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesNodesDeploymentsCreateQueryParams, _super);
    function ProdTtSasportalNodesNodesDeploymentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeploymentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeploymentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeploymentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeploymentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeploymentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeploymentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeploymentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ProdTtSasportalNodesNodesDeploymentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeploymentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeploymentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeploymentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ProdTtSasportalNodesNodesDeploymentsCreateQueryParams;
}(SpeakeasyBase));
export { ProdTtSasportalNodesNodesDeploymentsCreateQueryParams };
var ProdTtSasportalNodesNodesDeploymentsCreateSecurity = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesNodesDeploymentsCreateSecurity, _super);
    function ProdTtSasportalNodesNodesDeploymentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ProdTtSasportalNodesNodesDeploymentsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ProdTtSasportalNodesNodesDeploymentsCreateSecurity.prototype, "oauth2c", void 0);
    return ProdTtSasportalNodesNodesDeploymentsCreateSecurity;
}(SpeakeasyBase));
export { ProdTtSasportalNodesNodesDeploymentsCreateSecurity };
var ProdTtSasportalNodesNodesDeploymentsCreateRequest = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesNodesDeploymentsCreateRequest, _super);
    function ProdTtSasportalNodesNodesDeploymentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProdTtSasportalNodesNodesDeploymentsCreatePathParams)
    ], ProdTtSasportalNodesNodesDeploymentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProdTtSasportalNodesNodesDeploymentsCreateQueryParams)
    ], ProdTtSasportalNodesNodesDeploymentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SasPortalDeploymentInput)
    ], ProdTtSasportalNodesNodesDeploymentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProdTtSasportalNodesNodesDeploymentsCreateSecurity)
    ], ProdTtSasportalNodesNodesDeploymentsCreateRequest.prototype, "security", void 0);
    return ProdTtSasportalNodesNodesDeploymentsCreateRequest;
}(SpeakeasyBase));
export { ProdTtSasportalNodesNodesDeploymentsCreateRequest };
var ProdTtSasportalNodesNodesDeploymentsCreateResponse = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesNodesDeploymentsCreateResponse, _super);
    function ProdTtSasportalNodesNodesDeploymentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeploymentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SasPortalDeployment)
    ], ProdTtSasportalNodesNodesDeploymentsCreateResponse.prototype, "sasPortalDeployment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProdTtSasportalNodesNodesDeploymentsCreateResponse.prototype, "statusCode", void 0);
    return ProdTtSasportalNodesNodesDeploymentsCreateResponse;
}(SpeakeasyBase));
export { ProdTtSasportalNodesNodesDeploymentsCreateResponse };
