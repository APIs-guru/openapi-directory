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
var GetLkeClusterPoolsPathParams = /** @class */ (function (_super) {
    __extends(GetLkeClusterPoolsPathParams, _super);
    function GetLkeClusterPoolsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", Number)
    ], GetLkeClusterPoolsPathParams.prototype, "clusterId", void 0);
    return GetLkeClusterPoolsPathParams;
}(SpeakeasyBase));
export { GetLkeClusterPoolsPathParams };
var GetLkeClusterPoolsSecurity = /** @class */ (function (_super) {
    __extends(GetLkeClusterPoolsSecurity, _super);
    function GetLkeClusterPoolsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLkeClusterPoolsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLkeClusterPoolsSecurity.prototype, "oauth", void 0);
    return GetLkeClusterPoolsSecurity;
}(SpeakeasyBase));
export { GetLkeClusterPoolsSecurity };
var GetLkeClusterPools200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLkeClusterPools200ApplicationJson, _super);
    function GetLkeClusterPools200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.LkeNodePool }),
        __metadata("design:type", Array)
    ], GetLkeClusterPools200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetLkeClusterPools200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetLkeClusterPools200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetLkeClusterPools200ApplicationJson.prototype, "results", void 0);
    return GetLkeClusterPools200ApplicationJson;
}(SpeakeasyBase));
export { GetLkeClusterPools200ApplicationJson };
var GetLkeClusterPoolsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLkeClusterPoolsDefaultApplicationJson, _super);
    function GetLkeClusterPoolsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLkeClusterPoolsDefaultApplicationJson.prototype, "errors", void 0);
    return GetLkeClusterPoolsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLkeClusterPoolsDefaultApplicationJson };
var GetLkeClusterPoolsRequest = /** @class */ (function (_super) {
    __extends(GetLkeClusterPoolsRequest, _super);
    function GetLkeClusterPoolsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterPoolsPathParams)
    ], GetLkeClusterPoolsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterPoolsSecurity)
    ], GetLkeClusterPoolsRequest.prototype, "security", void 0);
    return GetLkeClusterPoolsRequest;
}(SpeakeasyBase));
export { GetLkeClusterPoolsRequest };
var GetLkeClusterPoolsResponse = /** @class */ (function (_super) {
    __extends(GetLkeClusterPoolsResponse, _super);
    function GetLkeClusterPoolsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLkeClusterPoolsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLkeClusterPoolsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterPools200ApplicationJson)
    ], GetLkeClusterPoolsResponse.prototype, "getLkeClusterPools200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterPoolsDefaultApplicationJson)
    ], GetLkeClusterPoolsResponse.prototype, "getLkeClusterPoolsDefaultApplicationJsonObject", void 0);
    return GetLkeClusterPoolsResponse;
}(SpeakeasyBase));
export { GetLkeClusterPoolsResponse };
