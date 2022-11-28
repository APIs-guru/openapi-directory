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
var GetLkeClusterApiEndpointsPathParams = /** @class */ (function (_super) {
    __extends(GetLkeClusterApiEndpointsPathParams, _super);
    function GetLkeClusterApiEndpointsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", Number)
    ], GetLkeClusterApiEndpointsPathParams.prototype, "clusterId", void 0);
    return GetLkeClusterApiEndpointsPathParams;
}(SpeakeasyBase));
export { GetLkeClusterApiEndpointsPathParams };
var GetLkeClusterApiEndpointsSecurity = /** @class */ (function (_super) {
    __extends(GetLkeClusterApiEndpointsSecurity, _super);
    function GetLkeClusterApiEndpointsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLkeClusterApiEndpointsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLkeClusterApiEndpointsSecurity.prototype, "oauth", void 0);
    return GetLkeClusterApiEndpointsSecurity;
}(SpeakeasyBase));
export { GetLkeClusterApiEndpointsSecurity };
// GetLkeClusterApiEndpoints200ApplicationJsonData
/**
 * The Kubernetes API server endpoints for this cluster.
 *
**/
var GetLkeClusterApiEndpoints200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetLkeClusterApiEndpoints200ApplicationJsonData, _super);
    function GetLkeClusterApiEndpoints200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpoint" }),
        __metadata("design:type", String)
    ], GetLkeClusterApiEndpoints200ApplicationJsonData.prototype, "endpoint", void 0);
    return GetLkeClusterApiEndpoints200ApplicationJsonData;
}(SpeakeasyBase));
export { GetLkeClusterApiEndpoints200ApplicationJsonData };
var GetLkeClusterApiEndpoints200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLkeClusterApiEndpoints200ApplicationJson, _super);
    function GetLkeClusterApiEndpoints200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: GetLkeClusterApiEndpoints200ApplicationJsonData }),
        __metadata("design:type", Array)
    ], GetLkeClusterApiEndpoints200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetLkeClusterApiEndpoints200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetLkeClusterApiEndpoints200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetLkeClusterApiEndpoints200ApplicationJson.prototype, "results", void 0);
    return GetLkeClusterApiEndpoints200ApplicationJson;
}(SpeakeasyBase));
export { GetLkeClusterApiEndpoints200ApplicationJson };
var GetLkeClusterApiEndpointsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLkeClusterApiEndpointsDefaultApplicationJson, _super);
    function GetLkeClusterApiEndpointsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLkeClusterApiEndpointsDefaultApplicationJson.prototype, "errors", void 0);
    return GetLkeClusterApiEndpointsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLkeClusterApiEndpointsDefaultApplicationJson };
var GetLkeClusterApiEndpointsRequest = /** @class */ (function (_super) {
    __extends(GetLkeClusterApiEndpointsRequest, _super);
    function GetLkeClusterApiEndpointsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterApiEndpointsPathParams)
    ], GetLkeClusterApiEndpointsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterApiEndpointsSecurity)
    ], GetLkeClusterApiEndpointsRequest.prototype, "security", void 0);
    return GetLkeClusterApiEndpointsRequest;
}(SpeakeasyBase));
export { GetLkeClusterApiEndpointsRequest };
var GetLkeClusterApiEndpointsResponse = /** @class */ (function (_super) {
    __extends(GetLkeClusterApiEndpointsResponse, _super);
    function GetLkeClusterApiEndpointsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLkeClusterApiEndpointsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLkeClusterApiEndpointsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterApiEndpoints200ApplicationJson)
    ], GetLkeClusterApiEndpointsResponse.prototype, "getLkeClusterApiEndpoints200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterApiEndpointsDefaultApplicationJson)
    ], GetLkeClusterApiEndpointsResponse.prototype, "getLkeClusterApiEndpointsDefaultApplicationJsonObject", void 0);
    return GetLkeClusterApiEndpointsResponse;
}(SpeakeasyBase));
export { GetLkeClusterApiEndpointsResponse };
