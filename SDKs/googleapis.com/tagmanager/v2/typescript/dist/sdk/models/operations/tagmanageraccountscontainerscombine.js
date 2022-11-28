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
var TagmanagerAccountsContainersCombinePathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersCombinePathParams, _super);
    function TagmanagerAccountsContainersCombinePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersCombinePathParams.prototype, "path", void 0);
    return TagmanagerAccountsContainersCombinePathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersCombinePathParams };
export var TagmanagerAccountsContainersCombineSettingSourceEnum;
(function (TagmanagerAccountsContainersCombineSettingSourceEnum) {
    TagmanagerAccountsContainersCombineSettingSourceEnum["SettingSourceUnspecified"] = "settingSourceUnspecified";
    TagmanagerAccountsContainersCombineSettingSourceEnum["Current"] = "current";
    TagmanagerAccountsContainersCombineSettingSourceEnum["Other"] = "other";
})(TagmanagerAccountsContainersCombineSettingSourceEnum || (TagmanagerAccountsContainersCombineSettingSourceEnum = {}));
var TagmanagerAccountsContainersCombineQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersCombineQueryParams, _super);
    function TagmanagerAccountsContainersCombineQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersCombineQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersCombineQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowUserPermissionFeatureUpdate" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersCombineQueryParams.prototype, "allowUserPermissionFeatureUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersCombineQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersCombineQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=containerId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersCombineQueryParams.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersCombineQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersCombineQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersCombineQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersCombineQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersCombineQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=settingSource" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersCombineQueryParams.prototype, "settingSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersCombineQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersCombineQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersCombineQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersCombineQueryParams };
var TagmanagerAccountsContainersCombineSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersCombineSecurity, _super);
    function TagmanagerAccountsContainersCombineSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersCombineSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersCombineSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersCombineSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersCombineSecurity };
var TagmanagerAccountsContainersCombineRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersCombineRequest, _super);
    function TagmanagerAccountsContainersCombineRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersCombinePathParams)
    ], TagmanagerAccountsContainersCombineRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersCombineQueryParams)
    ], TagmanagerAccountsContainersCombineRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersCombineSecurity)
    ], TagmanagerAccountsContainersCombineRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersCombineRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersCombineRequest };
var TagmanagerAccountsContainersCombineResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersCombineResponse, _super);
    function TagmanagerAccountsContainersCombineResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Container)
    ], TagmanagerAccountsContainersCombineResponse.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersCombineResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersCombineResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersCombineResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersCombineResponse };
