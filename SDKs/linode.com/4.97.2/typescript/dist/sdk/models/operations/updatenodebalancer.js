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
var UpdateNodeBalancerPathParams = /** @class */ (function (_super) {
    __extends(UpdateNodeBalancerPathParams, _super);
    function UpdateNodeBalancerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" }),
        __metadata("design:type", Number)
    ], UpdateNodeBalancerPathParams.prototype, "nodeBalancerId", void 0);
    return UpdateNodeBalancerPathParams;
}(SpeakeasyBase));
export { UpdateNodeBalancerPathParams };
var UpdateNodeBalancerSecurity = /** @class */ (function (_super) {
    __extends(UpdateNodeBalancerSecurity, _super);
    function UpdateNodeBalancerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateNodeBalancerSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateNodeBalancerSecurity.prototype, "oauth", void 0);
    return UpdateNodeBalancerSecurity;
}(SpeakeasyBase));
export { UpdateNodeBalancerSecurity };
var UpdateNodeBalancerDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateNodeBalancerDefaultApplicationJson, _super);
    function UpdateNodeBalancerDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateNodeBalancerDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateNodeBalancerDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateNodeBalancerDefaultApplicationJson };
var UpdateNodeBalancerRequest = /** @class */ (function (_super) {
    __extends(UpdateNodeBalancerRequest, _super);
    function UpdateNodeBalancerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNodeBalancerPathParams)
    ], UpdateNodeBalancerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.NodeBalancerInput)
    ], UpdateNodeBalancerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNodeBalancerSecurity)
    ], UpdateNodeBalancerRequest.prototype, "security", void 0);
    return UpdateNodeBalancerRequest;
}(SpeakeasyBase));
export { UpdateNodeBalancerRequest };
var UpdateNodeBalancerResponse = /** @class */ (function (_super) {
    __extends(UpdateNodeBalancerResponse, _super);
    function UpdateNodeBalancerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNodeBalancerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NodeBalancer)
    ], UpdateNodeBalancerResponse.prototype, "nodeBalancer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNodeBalancerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNodeBalancerDefaultApplicationJson)
    ], UpdateNodeBalancerResponse.prototype, "updateNodeBalancerDefaultApplicationJsonObject", void 0);
    return UpdateNodeBalancerResponse;
}(SpeakeasyBase));
export { UpdateNodeBalancerResponse };
