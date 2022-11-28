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
var GetNodeBalancerNodePathParams = /** @class */ (function (_super) {
    __extends(GetNodeBalancerNodePathParams, _super);
    function GetNodeBalancerNodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerNodePathParams.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerNodePathParams.prototype, "nodeBalancerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerNodePathParams.prototype, "nodeId", void 0);
    return GetNodeBalancerNodePathParams;
}(SpeakeasyBase));
export { GetNodeBalancerNodePathParams };
var GetNodeBalancerNodeSecurity = /** @class */ (function (_super) {
    __extends(GetNodeBalancerNodeSecurity, _super);
    function GetNodeBalancerNodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetNodeBalancerNodeSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetNodeBalancerNodeSecurity.prototype, "oauth", void 0);
    return GetNodeBalancerNodeSecurity;
}(SpeakeasyBase));
export { GetNodeBalancerNodeSecurity };
var GetNodeBalancerNodeDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetNodeBalancerNodeDefaultApplicationJson, _super);
    function GetNodeBalancerNodeDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetNodeBalancerNodeDefaultApplicationJson.prototype, "errors", void 0);
    return GetNodeBalancerNodeDefaultApplicationJson;
}(SpeakeasyBase));
export { GetNodeBalancerNodeDefaultApplicationJson };
var GetNodeBalancerNodeRequest = /** @class */ (function (_super) {
    __extends(GetNodeBalancerNodeRequest, _super);
    function GetNodeBalancerNodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerNodePathParams)
    ], GetNodeBalancerNodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerNodeSecurity)
    ], GetNodeBalancerNodeRequest.prototype, "security", void 0);
    return GetNodeBalancerNodeRequest;
}(SpeakeasyBase));
export { GetNodeBalancerNodeRequest };
var GetNodeBalancerNodeResponse = /** @class */ (function (_super) {
    __extends(GetNodeBalancerNodeResponse, _super);
    function GetNodeBalancerNodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNodeBalancerNodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NodeBalancerNode)
    ], GetNodeBalancerNodeResponse.prototype, "nodeBalancerNode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNodeBalancerNodeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerNodeDefaultApplicationJson)
    ], GetNodeBalancerNodeResponse.prototype, "getNodeBalancerNodeDefaultApplicationJsonObject", void 0);
    return GetNodeBalancerNodeResponse;
}(SpeakeasyBase));
export { GetNodeBalancerNodeResponse };
