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
var DeleteNodeBalancerPathParams = /** @class */ (function (_super) {
    __extends(DeleteNodeBalancerPathParams, _super);
    function DeleteNodeBalancerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" }),
        __metadata("design:type", Number)
    ], DeleteNodeBalancerPathParams.prototype, "nodeBalancerId", void 0);
    return DeleteNodeBalancerPathParams;
}(SpeakeasyBase));
export { DeleteNodeBalancerPathParams };
var DeleteNodeBalancerSecurity = /** @class */ (function (_super) {
    __extends(DeleteNodeBalancerSecurity, _super);
    function DeleteNodeBalancerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeleteNodeBalancerSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeleteNodeBalancerSecurity.prototype, "oauth", void 0);
    return DeleteNodeBalancerSecurity;
}(SpeakeasyBase));
export { DeleteNodeBalancerSecurity };
var DeleteNodeBalancerDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteNodeBalancerDefaultApplicationJson, _super);
    function DeleteNodeBalancerDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeleteNodeBalancerDefaultApplicationJson.prototype, "errors", void 0);
    return DeleteNodeBalancerDefaultApplicationJson;
}(SpeakeasyBase));
export { DeleteNodeBalancerDefaultApplicationJson };
var DeleteNodeBalancerRequest = /** @class */ (function (_super) {
    __extends(DeleteNodeBalancerRequest, _super);
    function DeleteNodeBalancerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteNodeBalancerPathParams)
    ], DeleteNodeBalancerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteNodeBalancerSecurity)
    ], DeleteNodeBalancerRequest.prototype, "security", void 0);
    return DeleteNodeBalancerRequest;
}(SpeakeasyBase));
export { DeleteNodeBalancerRequest };
var DeleteNodeBalancerResponse = /** @class */ (function (_super) {
    __extends(DeleteNodeBalancerResponse, _super);
    function DeleteNodeBalancerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteNodeBalancerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteNodeBalancerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteNodeBalancerResponse.prototype, "deleteNodeBalancer200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteNodeBalancerDefaultApplicationJson)
    ], DeleteNodeBalancerResponse.prototype, "deleteNodeBalancerDefaultApplicationJsonObject", void 0);
    return DeleteNodeBalancerResponse;
}(SpeakeasyBase));
export { DeleteNodeBalancerResponse };
