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
var GetNodeBalancerConfigsPathParams = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigsPathParams, _super);
    function GetNodeBalancerConfigsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigsPathParams.prototype, "nodeBalancerId", void 0);
    return GetNodeBalancerConfigsPathParams;
}(SpeakeasyBase));
export { GetNodeBalancerConfigsPathParams };
var GetNodeBalancerConfigsQueryParams = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigsQueryParams, _super);
    function GetNodeBalancerConfigsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigsQueryParams.prototype, "pageSize", void 0);
    return GetNodeBalancerConfigsQueryParams;
}(SpeakeasyBase));
export { GetNodeBalancerConfigsQueryParams };
var GetNodeBalancerConfigsSecurity = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigsSecurity, _super);
    function GetNodeBalancerConfigsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetNodeBalancerConfigsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetNodeBalancerConfigsSecurity.prototype, "oauth", void 0);
    return GetNodeBalancerConfigsSecurity;
}(SpeakeasyBase));
export { GetNodeBalancerConfigsSecurity };
var GetNodeBalancerConfigs200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigs200ApplicationJson, _super);
    function GetNodeBalancerConfigs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.NodeBalancerConfig }),
        __metadata("design:type", Array)
    ], GetNodeBalancerConfigs200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigs200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigs200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigs200ApplicationJson.prototype, "results", void 0);
    return GetNodeBalancerConfigs200ApplicationJson;
}(SpeakeasyBase));
export { GetNodeBalancerConfigs200ApplicationJson };
var GetNodeBalancerConfigsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigsDefaultApplicationJson, _super);
    function GetNodeBalancerConfigsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetNodeBalancerConfigsDefaultApplicationJson.prototype, "errors", void 0);
    return GetNodeBalancerConfigsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetNodeBalancerConfigsDefaultApplicationJson };
var GetNodeBalancerConfigsRequest = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigsRequest, _super);
    function GetNodeBalancerConfigsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerConfigsPathParams)
    ], GetNodeBalancerConfigsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerConfigsQueryParams)
    ], GetNodeBalancerConfigsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerConfigsSecurity)
    ], GetNodeBalancerConfigsRequest.prototype, "security", void 0);
    return GetNodeBalancerConfigsRequest;
}(SpeakeasyBase));
export { GetNodeBalancerConfigsRequest };
var GetNodeBalancerConfigsResponse = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigsResponse, _super);
    function GetNodeBalancerConfigsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNodeBalancerConfigsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerConfigs200ApplicationJson)
    ], GetNodeBalancerConfigsResponse.prototype, "getNodeBalancerConfigs200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerConfigsDefaultApplicationJson)
    ], GetNodeBalancerConfigsResponse.prototype, "getNodeBalancerConfigsDefaultApplicationJsonObject", void 0);
    return GetNodeBalancerConfigsResponse;
}(SpeakeasyBase));
export { GetNodeBalancerConfigsResponse };
