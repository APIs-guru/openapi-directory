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
var UpdateNodeBalancerNodePathParams = /** @class */ (function (_super) {
    __extends(UpdateNodeBalancerNodePathParams, _super);
    function UpdateNodeBalancerNodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" }),
        __metadata("design:type", Number)
    ], UpdateNodeBalancerNodePathParams.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" }),
        __metadata("design:type", Number)
    ], UpdateNodeBalancerNodePathParams.prototype, "nodeBalancerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", Number)
    ], UpdateNodeBalancerNodePathParams.prototype, "nodeId", void 0);
    return UpdateNodeBalancerNodePathParams;
}(SpeakeasyBase));
export { UpdateNodeBalancerNodePathParams };
var UpdateNodeBalancerNodeSecurity = /** @class */ (function (_super) {
    __extends(UpdateNodeBalancerNodeSecurity, _super);
    function UpdateNodeBalancerNodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateNodeBalancerNodeSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateNodeBalancerNodeSecurity.prototype, "oauth", void 0);
    return UpdateNodeBalancerNodeSecurity;
}(SpeakeasyBase));
export { UpdateNodeBalancerNodeSecurity };
var UpdateNodeBalancerNodeDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateNodeBalancerNodeDefaultApplicationJson, _super);
    function UpdateNodeBalancerNodeDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateNodeBalancerNodeDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateNodeBalancerNodeDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateNodeBalancerNodeDefaultApplicationJson };
var UpdateNodeBalancerNodeRequest = /** @class */ (function (_super) {
    __extends(UpdateNodeBalancerNodeRequest, _super);
    function UpdateNodeBalancerNodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNodeBalancerNodePathParams)
    ], UpdateNodeBalancerNodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.NodeBalancerNodeInput)
    ], UpdateNodeBalancerNodeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNodeBalancerNodeSecurity)
    ], UpdateNodeBalancerNodeRequest.prototype, "security", void 0);
    return UpdateNodeBalancerNodeRequest;
}(SpeakeasyBase));
export { UpdateNodeBalancerNodeRequest };
var UpdateNodeBalancerNodeResponse = /** @class */ (function (_super) {
    __extends(UpdateNodeBalancerNodeResponse, _super);
    function UpdateNodeBalancerNodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNodeBalancerNodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NodeBalancerNode)
    ], UpdateNodeBalancerNodeResponse.prototype, "nodeBalancerNode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNodeBalancerNodeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNodeBalancerNodeDefaultApplicationJson)
    ], UpdateNodeBalancerNodeResponse.prototype, "updateNodeBalancerNodeDefaultApplicationJsonObject", void 0);
    return UpdateNodeBalancerNodeResponse;
}(SpeakeasyBase));
export { UpdateNodeBalancerNodeResponse };
