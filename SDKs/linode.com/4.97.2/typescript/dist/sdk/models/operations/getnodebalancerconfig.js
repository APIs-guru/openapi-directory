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
var GetNodeBalancerConfigPathParams = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigPathParams, _super);
    function GetNodeBalancerConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigPathParams.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigPathParams.prototype, "nodeBalancerId", void 0);
    return GetNodeBalancerConfigPathParams;
}(SpeakeasyBase));
export { GetNodeBalancerConfigPathParams };
var GetNodeBalancerConfigSecurity = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigSecurity, _super);
    function GetNodeBalancerConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetNodeBalancerConfigSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetNodeBalancerConfigSecurity.prototype, "oauth", void 0);
    return GetNodeBalancerConfigSecurity;
}(SpeakeasyBase));
export { GetNodeBalancerConfigSecurity };
var GetNodeBalancerConfigDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigDefaultApplicationJson, _super);
    function GetNodeBalancerConfigDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetNodeBalancerConfigDefaultApplicationJson.prototype, "errors", void 0);
    return GetNodeBalancerConfigDefaultApplicationJson;
}(SpeakeasyBase));
export { GetNodeBalancerConfigDefaultApplicationJson };
var GetNodeBalancerConfigRequest = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigRequest, _super);
    function GetNodeBalancerConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerConfigPathParams)
    ], GetNodeBalancerConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerConfigSecurity)
    ], GetNodeBalancerConfigRequest.prototype, "security", void 0);
    return GetNodeBalancerConfigRequest;
}(SpeakeasyBase));
export { GetNodeBalancerConfigRequest };
var GetNodeBalancerConfigResponse = /** @class */ (function (_super) {
    __extends(GetNodeBalancerConfigResponse, _super);
    function GetNodeBalancerConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNodeBalancerConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NodeBalancerConfig)
    ], GetNodeBalancerConfigResponse.prototype, "nodeBalancerConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNodeBalancerConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerConfigDefaultApplicationJson)
    ], GetNodeBalancerConfigResponse.prototype, "getNodeBalancerConfigDefaultApplicationJsonObject", void 0);
    return GetNodeBalancerConfigResponse;
}(SpeakeasyBase));
export { GetNodeBalancerConfigResponse };
