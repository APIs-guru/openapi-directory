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
var NotebooksProjectsLocationsInstancesIsUpgradeablePathParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesIsUpgradeablePathParams, _super);
    function NotebooksProjectsLocationsInstancesIsUpgradeablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=notebookInstance" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesIsUpgradeablePathParams.prototype, "notebookInstance", void 0);
    return NotebooksProjectsLocationsInstancesIsUpgradeablePathParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesIsUpgradeablePathParams };
export var NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum;
(function (NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum) {
    NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum["UpgradeTypeUnspecified"] = "UPGRADE_TYPE_UNSPECIFIED";
    NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum["UpgradeFramework"] = "UPGRADE_FRAMEWORK";
    NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum["UpgradeOs"] = "UPGRADE_OS";
    NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum["UpgradeCuda"] = "UPGRADE_CUDA";
    NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum["UpgradeAll"] = "UPGRADE_ALL";
})(NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum || (NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum = {}));
var NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams, _super);
    function NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams.prototype, "uploadProtocol", void 0);
    return NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams };
var NotebooksProjectsLocationsInstancesIsUpgradeableSecurity = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesIsUpgradeableSecurity, _super);
    function NotebooksProjectsLocationsInstancesIsUpgradeableSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableSecurity.prototype, "oauth2c", void 0);
    return NotebooksProjectsLocationsInstancesIsUpgradeableSecurity;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesIsUpgradeableSecurity };
var NotebooksProjectsLocationsInstancesIsUpgradeableRequest = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesIsUpgradeableRequest, _super);
    function NotebooksProjectsLocationsInstancesIsUpgradeableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsInstancesIsUpgradeablePathParams)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsInstancesIsUpgradeableSecurity)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableRequest.prototype, "security", void 0);
    return NotebooksProjectsLocationsInstancesIsUpgradeableRequest;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesIsUpgradeableRequest };
var NotebooksProjectsLocationsInstancesIsUpgradeableResponse = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesIsUpgradeableResponse, _super);
    function NotebooksProjectsLocationsInstancesIsUpgradeableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.IsInstanceUpgradeableResponse)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableResponse.prototype, "isInstanceUpgradeableResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsInstancesIsUpgradeableResponse.prototype, "statusCode", void 0);
    return NotebooksProjectsLocationsInstancesIsUpgradeableResponse;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesIsUpgradeableResponse };
