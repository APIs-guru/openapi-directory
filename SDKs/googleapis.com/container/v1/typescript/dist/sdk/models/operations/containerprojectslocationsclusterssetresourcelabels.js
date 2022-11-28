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
var ContainerProjectsLocationsClustersSetResourceLabelsPathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetResourceLabelsPathParams, _super);
    function ContainerProjectsLocationsClustersSetResourceLabelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetResourceLabelsPathParams.prototype, "name", void 0);
    return ContainerProjectsLocationsClustersSetResourceLabelsPathParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetResourceLabelsPathParams };
var ContainerProjectsLocationsClustersSetResourceLabelsQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetResourceLabelsQueryParams, _super);
    function ContainerProjectsLocationsClustersSetResourceLabelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetResourceLabelsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetResourceLabelsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetResourceLabelsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetResourceLabelsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetResourceLabelsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetResourceLabelsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetResourceLabelsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsLocationsClustersSetResourceLabelsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetResourceLabelsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetResourceLabelsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetResourceLabelsQueryParams.prototype, "uploadProtocol", void 0);
    return ContainerProjectsLocationsClustersSetResourceLabelsQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetResourceLabelsQueryParams };
var ContainerProjectsLocationsClustersSetResourceLabelsSecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetResourceLabelsSecurity, _super);
    function ContainerProjectsLocationsClustersSetResourceLabelsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsLocationsClustersSetResourceLabelsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsLocationsClustersSetResourceLabelsSecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsLocationsClustersSetResourceLabelsSecurity;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetResourceLabelsSecurity };
var ContainerProjectsLocationsClustersSetResourceLabelsRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetResourceLabelsRequest, _super);
    function ContainerProjectsLocationsClustersSetResourceLabelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersSetResourceLabelsPathParams)
    ], ContainerProjectsLocationsClustersSetResourceLabelsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersSetResourceLabelsQueryParams)
    ], ContainerProjectsLocationsClustersSetResourceLabelsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetLabelsRequest)
    ], ContainerProjectsLocationsClustersSetResourceLabelsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersSetResourceLabelsSecurity)
    ], ContainerProjectsLocationsClustersSetResourceLabelsRequest.prototype, "security", void 0);
    return ContainerProjectsLocationsClustersSetResourceLabelsRequest;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetResourceLabelsRequest };
var ContainerProjectsLocationsClustersSetResourceLabelsResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetResourceLabelsResponse, _super);
    function ContainerProjectsLocationsClustersSetResourceLabelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetResourceLabelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ContainerProjectsLocationsClustersSetResourceLabelsResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsLocationsClustersSetResourceLabelsResponse.prototype, "statusCode", void 0);
    return ContainerProjectsLocationsClustersSetResourceLabelsResponse;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetResourceLabelsResponse };
