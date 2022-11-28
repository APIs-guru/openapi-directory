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
var GetLkeClusterPathParams = /** @class */ (function (_super) {
    __extends(GetLkeClusterPathParams, _super);
    function GetLkeClusterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", Number)
    ], GetLkeClusterPathParams.prototype, "clusterId", void 0);
    return GetLkeClusterPathParams;
}(SpeakeasyBase));
export { GetLkeClusterPathParams };
var GetLkeClusterSecurity = /** @class */ (function (_super) {
    __extends(GetLkeClusterSecurity, _super);
    function GetLkeClusterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLkeClusterSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLkeClusterSecurity.prototype, "oauth", void 0);
    return GetLkeClusterSecurity;
}(SpeakeasyBase));
export { GetLkeClusterSecurity };
var GetLkeClusterDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLkeClusterDefaultApplicationJson, _super);
    function GetLkeClusterDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLkeClusterDefaultApplicationJson.prototype, "errors", void 0);
    return GetLkeClusterDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLkeClusterDefaultApplicationJson };
var GetLkeClusterRequest = /** @class */ (function (_super) {
    __extends(GetLkeClusterRequest, _super);
    function GetLkeClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterPathParams)
    ], GetLkeClusterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterSecurity)
    ], GetLkeClusterRequest.prototype, "security", void 0);
    return GetLkeClusterRequest;
}(SpeakeasyBase));
export { GetLkeClusterRequest };
var GetLkeClusterResponse = /** @class */ (function (_super) {
    __extends(GetLkeClusterResponse, _super);
    function GetLkeClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLkeClusterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LkeCluster)
    ], GetLkeClusterResponse.prototype, "lkeCluster", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLkeClusterResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeClusterDefaultApplicationJson)
    ], GetLkeClusterResponse.prototype, "getLkeClusterDefaultApplicationJsonObject", void 0);
    return GetLkeClusterResponse;
}(SpeakeasyBase));
export { GetLkeClusterResponse };
