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
var CreateNodeBalancerNodePathParams = /** @class */ (function (_super) {
    __extends(CreateNodeBalancerNodePathParams, _super);
    function CreateNodeBalancerNodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" }),
        __metadata("design:type", Number)
    ], CreateNodeBalancerNodePathParams.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" }),
        __metadata("design:type", Number)
    ], CreateNodeBalancerNodePathParams.prototype, "nodeBalancerId", void 0);
    return CreateNodeBalancerNodePathParams;
}(SpeakeasyBase));
export { CreateNodeBalancerNodePathParams };
export var CreateNodeBalancerNodeRequestBodyModeEnum;
(function (CreateNodeBalancerNodeRequestBodyModeEnum) {
    CreateNodeBalancerNodeRequestBodyModeEnum["Accept"] = "accept";
    CreateNodeBalancerNodeRequestBodyModeEnum["Reject"] = "reject";
    CreateNodeBalancerNodeRequestBodyModeEnum["Drain"] = "drain";
    CreateNodeBalancerNodeRequestBodyModeEnum["Backup"] = "backup";
})(CreateNodeBalancerNodeRequestBodyModeEnum || (CreateNodeBalancerNodeRequestBodyModeEnum = {}));
var CreateNodeBalancerNodeRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateNodeBalancerNodeRequestBodyInput, _super);
    function CreateNodeBalancerNodeRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], CreateNodeBalancerNodeRequestBodyInput.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CreateNodeBalancerNodeRequestBodyInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], CreateNodeBalancerNodeRequestBodyInput.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], CreateNodeBalancerNodeRequestBodyInput.prototype, "weight", void 0);
    return CreateNodeBalancerNodeRequestBodyInput;
}(SpeakeasyBase));
export { CreateNodeBalancerNodeRequestBodyInput };
var CreateNodeBalancerNodeSecurity = /** @class */ (function (_super) {
    __extends(CreateNodeBalancerNodeSecurity, _super);
    function CreateNodeBalancerNodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreateNodeBalancerNodeSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateNodeBalancerNodeSecurity.prototype, "oauth", void 0);
    return CreateNodeBalancerNodeSecurity;
}(SpeakeasyBase));
export { CreateNodeBalancerNodeSecurity };
var CreateNodeBalancerNodeDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreateNodeBalancerNodeDefaultApplicationJson, _super);
    function CreateNodeBalancerNodeDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreateNodeBalancerNodeDefaultApplicationJson.prototype, "errors", void 0);
    return CreateNodeBalancerNodeDefaultApplicationJson;
}(SpeakeasyBase));
export { CreateNodeBalancerNodeDefaultApplicationJson };
var CreateNodeBalancerNodeRequest = /** @class */ (function (_super) {
    __extends(CreateNodeBalancerNodeRequest, _super);
    function CreateNodeBalancerNodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNodeBalancerNodePathParams)
    ], CreateNodeBalancerNodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNodeBalancerNodeRequestBodyInput)
    ], CreateNodeBalancerNodeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNodeBalancerNodeSecurity)
    ], CreateNodeBalancerNodeRequest.prototype, "security", void 0);
    return CreateNodeBalancerNodeRequest;
}(SpeakeasyBase));
export { CreateNodeBalancerNodeRequest };
var CreateNodeBalancerNodeResponse = /** @class */ (function (_super) {
    __extends(CreateNodeBalancerNodeResponse, _super);
    function CreateNodeBalancerNodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNodeBalancerNodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NodeBalancerNode)
    ], CreateNodeBalancerNodeResponse.prototype, "nodeBalancerNode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNodeBalancerNodeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNodeBalancerNodeDefaultApplicationJson)
    ], CreateNodeBalancerNodeResponse.prototype, "createNodeBalancerNodeDefaultApplicationJsonObject", void 0);
    return CreateNodeBalancerNodeResponse;
}(SpeakeasyBase));
export { CreateNodeBalancerNodeResponse };
