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
var GetLkeClusterKubeconfigPathParams = /** @class */ (function (_super) {
    __extends(GetLkeClusterKubeconfigPathParams, _super);
    function GetLkeClusterKubeconfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", Number)
    ], GetLkeClusterKubeconfigPathParams.prototype, "clusterId", void 0);
    return GetLkeClusterKubeconfigPathParams;
}(SpeakeasyBase));
export { GetLkeClusterKubeconfigPathParams };
var GetLkeClusterKubeconfigSecurity = /** @class */ (function (_super) {
    __extends(GetLkeClusterKubeconfigSecurity, _super);
    function GetLkeClusterKubeconfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLkeClusterKubeconfigSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLkeClusterKubeconfigSecurity.prototype, "oauth", void 0);
    return GetLkeClusterKubeconfigSecurity;
}(SpeakeasyBase));
export { GetLkeClusterKubeconfigSecurity };
var GetLkeClusterKubeconfig200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLkeClusterKubeconfig200ApplicationJson, _super);
    function GetLkeClusterKubeconfig200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kubeconfig" }),
        __metadata("design:type", String)
    ], GetLkeClusterKubeconfig200ApplicationJson.prototype, "kubeconfig", void 0);
    return GetLkeClusterKubeconfig200ApplicationJson;
}(SpeakeasyBase));
export { GetLkeClusterKubeconfig200ApplicationJson };
var GetLkeClusterKubeconfigDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLkeClusterKubeconfigDefaultApplicationJson, _super);
    function GetLkeClusterKubeconfigDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLkeClusterKubeconfigDefaultApplicationJson.prototype, "errors", void 0);
    return GetLkeClusterKubeconfigDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLkeClusterKubeconfigDefaultApplicationJson };
var GetLkeClusterKubeconfigRequest = /** @class */ (function (_super) {
    __extends(GetLkeClusterKubeconfigRequest, _super);
    function GetLkeClusterKubeconfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterKubeconfigPathParams)
    ], GetLkeClusterKubeconfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterKubeconfigSecurity)
    ], GetLkeClusterKubeconfigRequest.prototype, "security", void 0);
    return GetLkeClusterKubeconfigRequest;
}(SpeakeasyBase));
export { GetLkeClusterKubeconfigRequest };
var GetLkeClusterKubeconfigResponse = /** @class */ (function (_super) {
    __extends(GetLkeClusterKubeconfigResponse, _super);
    function GetLkeClusterKubeconfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLkeClusterKubeconfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLkeClusterKubeconfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterKubeconfig200ApplicationJson)
    ], GetLkeClusterKubeconfigResponse.prototype, "getLkeClusterKubeconfig200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterKubeconfigDefaultApplicationJson)
    ], GetLkeClusterKubeconfigResponse.prototype, "getLkeClusterKubeconfigDefaultApplicationJsonObject", void 0);
    return GetLkeClusterKubeconfigResponse;
}(SpeakeasyBase));
export { GetLkeClusterKubeconfigResponse };
