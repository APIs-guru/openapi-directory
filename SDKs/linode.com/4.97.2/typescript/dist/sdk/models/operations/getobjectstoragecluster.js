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
export var GetObjectStorageClusterServerList = [
    "https://api.linode.com/v4",
];
var GetObjectStorageClusterPathParams = /** @class */ (function (_super) {
    __extends(GetObjectStorageClusterPathParams, _super);
    function GetObjectStorageClusterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], GetObjectStorageClusterPathParams.prototype, "clusterId", void 0);
    return GetObjectStorageClusterPathParams;
}(SpeakeasyBase));
export { GetObjectStorageClusterPathParams };
var GetObjectStorageClusterDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetObjectStorageClusterDefaultApplicationJson, _super);
    function GetObjectStorageClusterDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetObjectStorageClusterDefaultApplicationJson.prototype, "errors", void 0);
    return GetObjectStorageClusterDefaultApplicationJson;
}(SpeakeasyBase));
export { GetObjectStorageClusterDefaultApplicationJson };
var GetObjectStorageClusterRequest = /** @class */ (function (_super) {
    __extends(GetObjectStorageClusterRequest, _super);
    function GetObjectStorageClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageClusterRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageClusterPathParams)
    ], GetObjectStorageClusterRequest.prototype, "pathParams", void 0);
    return GetObjectStorageClusterRequest;
}(SpeakeasyBase));
export { GetObjectStorageClusterRequest };
var GetObjectStorageClusterResponse = /** @class */ (function (_super) {
    __extends(GetObjectStorageClusterResponse, _super);
    function GetObjectStorageClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageClusterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObjectStorageCluster)
    ], GetObjectStorageClusterResponse.prototype, "objectStorageCluster", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetObjectStorageClusterResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageClusterDefaultApplicationJson)
    ], GetObjectStorageClusterResponse.prototype, "getObjectStorageClusterDefaultApplicationJsonObject", void 0);
    return GetObjectStorageClusterResponse;
}(SpeakeasyBase));
export { GetObjectStorageClusterResponse };
