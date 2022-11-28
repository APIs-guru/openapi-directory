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
var DeleteLkeClusterPathParams = /** @class */ (function (_super) {
    __extends(DeleteLkeClusterPathParams, _super);
    function DeleteLkeClusterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", Number)
    ], DeleteLkeClusterPathParams.prototype, "clusterId", void 0);
    return DeleteLkeClusterPathParams;
}(SpeakeasyBase));
export { DeleteLkeClusterPathParams };
var DeleteLkeClusterSecurity = /** @class */ (function (_super) {
    __extends(DeleteLkeClusterSecurity, _super);
    function DeleteLkeClusterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeleteLkeClusterSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeleteLkeClusterSecurity.prototype, "oauth", void 0);
    return DeleteLkeClusterSecurity;
}(SpeakeasyBase));
export { DeleteLkeClusterSecurity };
var DeleteLkeClusterDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteLkeClusterDefaultApplicationJson, _super);
    function DeleteLkeClusterDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeleteLkeClusterDefaultApplicationJson.prototype, "errors", void 0);
    return DeleteLkeClusterDefaultApplicationJson;
}(SpeakeasyBase));
export { DeleteLkeClusterDefaultApplicationJson };
var DeleteLkeClusterRequest = /** @class */ (function (_super) {
    __extends(DeleteLkeClusterRequest, _super);
    function DeleteLkeClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteLkeClusterPathParams)
    ], DeleteLkeClusterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteLkeClusterSecurity)
    ], DeleteLkeClusterRequest.prototype, "security", void 0);
    return DeleteLkeClusterRequest;
}(SpeakeasyBase));
export { DeleteLkeClusterRequest };
var DeleteLkeClusterResponse = /** @class */ (function (_super) {
    __extends(DeleteLkeClusterResponse, _super);
    function DeleteLkeClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteLkeClusterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteLkeClusterResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteLkeClusterResponse.prototype, "deleteLkeCluster200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteLkeClusterDefaultApplicationJson)
    ], DeleteLkeClusterResponse.prototype, "deleteLkeClusterDefaultApplicationJsonObject", void 0);
    return DeleteLkeClusterResponse;
}(SpeakeasyBase));
export { DeleteLkeClusterResponse };
