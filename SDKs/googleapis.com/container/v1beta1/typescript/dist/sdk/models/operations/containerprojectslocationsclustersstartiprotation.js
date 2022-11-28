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
var ContainerProjectsLocationsClustersStartIpRotationPathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersStartIpRotationPathParams, _super);
    function ContainerProjectsLocationsClustersStartIpRotationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersStartIpRotationPathParams.prototype, "name", void 0);
    return ContainerProjectsLocationsClustersStartIpRotationPathParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersStartIpRotationPathParams };
var ContainerProjectsLocationsClustersStartIpRotationQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersStartIpRotationQueryParams, _super);
    function ContainerProjectsLocationsClustersStartIpRotationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersStartIpRotationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersStartIpRotationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersStartIpRotationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersStartIpRotationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersStartIpRotationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersStartIpRotationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersStartIpRotationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsLocationsClustersStartIpRotationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersStartIpRotationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersStartIpRotationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersStartIpRotationQueryParams.prototype, "uploadProtocol", void 0);
    return ContainerProjectsLocationsClustersStartIpRotationQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersStartIpRotationQueryParams };
var ContainerProjectsLocationsClustersStartIpRotationSecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersStartIpRotationSecurity, _super);
    function ContainerProjectsLocationsClustersStartIpRotationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsLocationsClustersStartIpRotationSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsLocationsClustersStartIpRotationSecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsLocationsClustersStartIpRotationSecurity;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersStartIpRotationSecurity };
var ContainerProjectsLocationsClustersStartIpRotationRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersStartIpRotationRequest, _super);
    function ContainerProjectsLocationsClustersStartIpRotationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersStartIpRotationPathParams)
    ], ContainerProjectsLocationsClustersStartIpRotationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersStartIpRotationQueryParams)
    ], ContainerProjectsLocationsClustersStartIpRotationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StartIpRotationRequest)
    ], ContainerProjectsLocationsClustersStartIpRotationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersStartIpRotationSecurity)
    ], ContainerProjectsLocationsClustersStartIpRotationRequest.prototype, "security", void 0);
    return ContainerProjectsLocationsClustersStartIpRotationRequest;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersStartIpRotationRequest };
var ContainerProjectsLocationsClustersStartIpRotationResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersStartIpRotationResponse, _super);
    function ContainerProjectsLocationsClustersStartIpRotationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersStartIpRotationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ContainerProjectsLocationsClustersStartIpRotationResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsLocationsClustersStartIpRotationResponse.prototype, "statusCode", void 0);
    return ContainerProjectsLocationsClustersStartIpRotationResponse;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersStartIpRotationResponse };
