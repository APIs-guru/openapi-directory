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
export var GetObjectStorageClustersServerList = [
    "https://api.linode.com/v4",
];
var GetObjectStorageClusters200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetObjectStorageClusters200ApplicationJson, _super);
    function GetObjectStorageClusters200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ObjectStorageCluster }),
        __metadata("design:type", Array)
    ], GetObjectStorageClusters200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetObjectStorageClusters200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetObjectStorageClusters200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetObjectStorageClusters200ApplicationJson.prototype, "results", void 0);
    return GetObjectStorageClusters200ApplicationJson;
}(SpeakeasyBase));
export { GetObjectStorageClusters200ApplicationJson };
var GetObjectStorageClustersDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetObjectStorageClustersDefaultApplicationJson, _super);
    function GetObjectStorageClustersDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetObjectStorageClustersDefaultApplicationJson.prototype, "errors", void 0);
    return GetObjectStorageClustersDefaultApplicationJson;
}(SpeakeasyBase));
export { GetObjectStorageClustersDefaultApplicationJson };
var GetObjectStorageClustersRequest = /** @class */ (function (_super) {
    __extends(GetObjectStorageClustersRequest, _super);
    function GetObjectStorageClustersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageClustersRequest.prototype, "serverUrl", void 0);
    return GetObjectStorageClustersRequest;
}(SpeakeasyBase));
export { GetObjectStorageClustersRequest };
var GetObjectStorageClustersResponse = /** @class */ (function (_super) {
    __extends(GetObjectStorageClustersResponse, _super);
    function GetObjectStorageClustersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageClustersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetObjectStorageClustersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageClusters200ApplicationJson)
    ], GetObjectStorageClustersResponse.prototype, "getObjectStorageClusters200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageClustersDefaultApplicationJson)
    ], GetObjectStorageClustersResponse.prototype, "getObjectStorageClustersDefaultApplicationJsonObject", void 0);
    return GetObjectStorageClustersResponse;
}(SpeakeasyBase));
export { GetObjectStorageClustersResponse };
