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
var UpdateNodeBalancerConfigPathParams = /** @class */ (function (_super) {
    __extends(UpdateNodeBalancerConfigPathParams, _super);
    function UpdateNodeBalancerConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" }),
        __metadata("design:type", Number)
    ], UpdateNodeBalancerConfigPathParams.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" }),
        __metadata("design:type", Number)
    ], UpdateNodeBalancerConfigPathParams.prototype, "nodeBalancerId", void 0);
    return UpdateNodeBalancerConfigPathParams;
}(SpeakeasyBase));
export { UpdateNodeBalancerConfigPathParams };
var UpdateNodeBalancerConfigSecurity = /** @class */ (function (_super) {
    __extends(UpdateNodeBalancerConfigSecurity, _super);
    function UpdateNodeBalancerConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateNodeBalancerConfigSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateNodeBalancerConfigSecurity.prototype, "oauth", void 0);
    return UpdateNodeBalancerConfigSecurity;
}(SpeakeasyBase));
export { UpdateNodeBalancerConfigSecurity };
var UpdateNodeBalancerConfigDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateNodeBalancerConfigDefaultApplicationJson, _super);
    function UpdateNodeBalancerConfigDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateNodeBalancerConfigDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateNodeBalancerConfigDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateNodeBalancerConfigDefaultApplicationJson };
var UpdateNodeBalancerConfigRequest = /** @class */ (function (_super) {
    __extends(UpdateNodeBalancerConfigRequest, _super);
    function UpdateNodeBalancerConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNodeBalancerConfigPathParams)
    ], UpdateNodeBalancerConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.NodeBalancerConfigInput)
    ], UpdateNodeBalancerConfigRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNodeBalancerConfigSecurity)
    ], UpdateNodeBalancerConfigRequest.prototype, "security", void 0);
    return UpdateNodeBalancerConfigRequest;
}(SpeakeasyBase));
export { UpdateNodeBalancerConfigRequest };
var UpdateNodeBalancerConfigResponse = /** @class */ (function (_super) {
    __extends(UpdateNodeBalancerConfigResponse, _super);
    function UpdateNodeBalancerConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNodeBalancerConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NodeBalancerConfig)
    ], UpdateNodeBalancerConfigResponse.prototype, "nodeBalancerConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNodeBalancerConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNodeBalancerConfigDefaultApplicationJson)
    ], UpdateNodeBalancerConfigResponse.prototype, "updateNodeBalancerConfigDefaultApplicationJsonObject", void 0);
    return UpdateNodeBalancerConfigResponse;
}(SpeakeasyBase));
export { UpdateNodeBalancerConfigResponse };
