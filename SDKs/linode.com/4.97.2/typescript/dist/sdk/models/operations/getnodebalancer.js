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
var GetNodeBalancerPathParams = /** @class */ (function (_super) {
    __extends(GetNodeBalancerPathParams, _super);
    function GetNodeBalancerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" }),
        __metadata("design:type", Number)
    ], GetNodeBalancerPathParams.prototype, "nodeBalancerId", void 0);
    return GetNodeBalancerPathParams;
}(SpeakeasyBase));
export { GetNodeBalancerPathParams };
var GetNodeBalancerSecurity = /** @class */ (function (_super) {
    __extends(GetNodeBalancerSecurity, _super);
    function GetNodeBalancerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetNodeBalancerSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetNodeBalancerSecurity.prototype, "oauth", void 0);
    return GetNodeBalancerSecurity;
}(SpeakeasyBase));
export { GetNodeBalancerSecurity };
var GetNodeBalancerDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetNodeBalancerDefaultApplicationJson, _super);
    function GetNodeBalancerDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetNodeBalancerDefaultApplicationJson.prototype, "errors", void 0);
    return GetNodeBalancerDefaultApplicationJson;
}(SpeakeasyBase));
export { GetNodeBalancerDefaultApplicationJson };
var GetNodeBalancerRequest = /** @class */ (function (_super) {
    __extends(GetNodeBalancerRequest, _super);
    function GetNodeBalancerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerPathParams)
    ], GetNodeBalancerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerSecurity)
    ], GetNodeBalancerRequest.prototype, "security", void 0);
    return GetNodeBalancerRequest;
}(SpeakeasyBase));
export { GetNodeBalancerRequest };
var GetNodeBalancerResponse = /** @class */ (function (_super) {
    __extends(GetNodeBalancerResponse, _super);
    function GetNodeBalancerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNodeBalancerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NodeBalancer)
    ], GetNodeBalancerResponse.prototype, "nodeBalancer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNodeBalancerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodeBalancerDefaultApplicationJson)
    ], GetNodeBalancerResponse.prototype, "getNodeBalancerDefaultApplicationJsonObject", void 0);
    return GetNodeBalancerResponse;
}(SpeakeasyBase));
export { GetNodeBalancerResponse };
