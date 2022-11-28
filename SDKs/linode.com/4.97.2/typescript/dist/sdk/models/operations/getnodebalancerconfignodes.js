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
var GetNodeBalancerConfigNodesPathParams = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigNodesPathParams, _super);
    function GetNodeBalancerConfigNodesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigNodesPathParams.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigNodesPathParams.prototype, "nodeBalancerId", void 0);
    return GetNodeBalancerConfigNodesPathParams;
}(SpeakeasyBase));
export { GetNodeBalancerConfigNodesPathParams };
var GetNodeBalancerConfigNodesQueryParams = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigNodesQueryParams, _super);
    function GetNodeBalancerConfigNodesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigNodesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigNodesQueryParams.prototype, "pageSize", void 0);
    return GetNodeBalancerConfigNodesQueryParams;
}(SpeakeasyBase));
export { GetNodeBalancerConfigNodesQueryParams };
var GetNodeBalancerConfigNodesSecurity = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigNodesSecurity, _super);
    function GetNodeBalancerConfigNodesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetNodeBalancerConfigNodesSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetNodeBalancerConfigNodesSecurity.prototype, "oauth", void 0);
    return GetNodeBalancerConfigNodesSecurity;
}(SpeakeasyBase));
export { GetNodeBalancerConfigNodesSecurity };
var GetNodeBalancerConfigNodes200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigNodes200ApplicationJson, _super);
    function GetNodeBalancerConfigNodes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.NodeBalancerNode }),
        __metadata("design:type", Array)
    ], GetNodeBalancerConfigNodes200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigNodes200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigNodes200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigNodes200ApplicationJson.prototype, "results", void 0);
    return GetNodeBalancerConfigNodes200ApplicationJson;
}(SpeakeasyBase));
export { GetNodeBalancerConfigNodes200ApplicationJson };
var GetNodeBalancerConfigNodesDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigNodesDefaultApplicationJson, _super);
    function GetNodeBalancerConfigNodesDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetNodeBalancerConfigNodesDefaultApplicationJson.prototype, "errors", void 0);
    return GetNodeBalancerConfigNodesDefaultApplicationJson;
}(SpeakeasyBase));
export { GetNodeBalancerConfigNodesDefaultApplicationJson };
var GetNodeBalancerConfigNodesRequest = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigNodesRequest, _super);
    function GetNodeBalancerConfigNodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerConfigNodesPathParams)
    ], GetNodeBalancerConfigNodesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerConfigNodesQueryParams)
    ], GetNodeBalancerConfigNodesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerConfigNodesSecurity)
    ], GetNodeBalancerConfigNodesRequest.prototype, "security", void 0);
    return GetNodeBalancerConfigNodesRequest;
}(SpeakeasyBase));
export { GetNodeBalancerConfigNodesRequest };
var GetNodeBalancerConfigNodesResponse = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigNodesResponse, _super);
    function GetNodeBalancerConfigNodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNodeBalancerConfigNodesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigNodesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerConfigNodes200ApplicationJson)
    ], GetNodeBalancerConfigNodesResponse.prototype, "getNodeBalancerConfigNodes200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerConfigNodesDefaultApplicationJson)
    ], GetNodeBalancerConfigNodesResponse.prototype, "getNodeBalancerConfigNodesDefaultApplicationJsonObject", void 0);
    return GetNodeBalancerConfigNodesResponse;
}(SpeakeasyBase));
export { GetNodeBalancerConfigNodesResponse };
