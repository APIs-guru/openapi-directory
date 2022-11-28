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
var GetLkeClusterNodePathParams = /** @class */ (function (_super) {
    __extends(GetLkeClusterNodePathParams, _super);
    function GetLkeClusterNodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", Number)
    ], GetLkeClusterNodePathParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], GetLkeClusterNodePathParams.prototype, "nodeId", void 0);
    return GetLkeClusterNodePathParams;
}(SpeakeasyBase));
export { GetLkeClusterNodePathParams };
var GetLkeClusterNodeSecurity = /** @class */ (function (_super) {
    __extends(GetLkeClusterNodeSecurity, _super);
    function GetLkeClusterNodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLkeClusterNodeSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLkeClusterNodeSecurity.prototype, "oauth", void 0);
    return GetLkeClusterNodeSecurity;
}(SpeakeasyBase));
export { GetLkeClusterNodeSecurity };
export var GetLkeClusterNode200ApplicationJsonDataStatusEnum;
(function (GetLkeClusterNode200ApplicationJsonDataStatusEnum) {
    GetLkeClusterNode200ApplicationJsonDataStatusEnum["Ready"] = "ready";
    GetLkeClusterNode200ApplicationJsonDataStatusEnum["NotReady"] = "not_ready";
})(GetLkeClusterNode200ApplicationJsonDataStatusEnum || (GetLkeClusterNode200ApplicationJsonDataStatusEnum = {}));
// GetLkeClusterNode200ApplicationJsonData
/**
 * The selected node in the cluster.
 *
**/
var GetLkeClusterNode200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetLkeClusterNode200ApplicationJsonData, _super);
    function GetLkeClusterNode200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetLkeClusterNode200ApplicationJsonData.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance_id" }),
        __metadata("design:type", Number)
    ], GetLkeClusterNode200ApplicationJsonData.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetLkeClusterNode200ApplicationJsonData.prototype, "status", void 0);
    return GetLkeClusterNode200ApplicationJsonData;
}(SpeakeasyBase));
export { GetLkeClusterNode200ApplicationJsonData };
var GetLkeClusterNode200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLkeClusterNode200ApplicationJson, _super);
    function GetLkeClusterNode200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetLkeClusterNode200ApplicationJsonData)
    ], GetLkeClusterNode200ApplicationJson.prototype, "data", void 0);
    return GetLkeClusterNode200ApplicationJson;
}(SpeakeasyBase));
export { GetLkeClusterNode200ApplicationJson };
var GetLkeClusterNodeDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLkeClusterNodeDefaultApplicationJson, _super);
    function GetLkeClusterNodeDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLkeClusterNodeDefaultApplicationJson.prototype, "errors", void 0);
    return GetLkeClusterNodeDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLkeClusterNodeDefaultApplicationJson };
var GetLkeClusterNodeRequest = /** @class */ (function (_super) {
    __extends(GetLkeClusterNodeRequest, _super);
    function GetLkeClusterNodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterNodePathParams)
    ], GetLkeClusterNodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterNodeSecurity)
    ], GetLkeClusterNodeRequest.prototype, "security", void 0);
    return GetLkeClusterNodeRequest;
}(SpeakeasyBase));
export { GetLkeClusterNodeRequest };
var GetLkeClusterNodeResponse = /** @class */ (function (_super) {
    __extends(GetLkeClusterNodeResponse, _super);
    function GetLkeClusterNodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLkeClusterNodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLkeClusterNodeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterNode200ApplicationJson)
    ], GetLkeClusterNodeResponse.prototype, "getLkeClusterNode200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterNodeDefaultApplicationJson)
    ], GetLkeClusterNodeResponse.prototype, "getLkeClusterNodeDefaultApplicationJsonObject", void 0);
    return GetLkeClusterNodeResponse;
}(SpeakeasyBase));
export { GetLkeClusterNodeResponse };
