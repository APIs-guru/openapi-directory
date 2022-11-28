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
export var GetObjectStorageBucketsServerList = [
    "https://api.linode.com/v4",
];
var GetObjectStorageBucketsSecurity = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketsSecurity, _super);
    function GetObjectStorageBucketsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetObjectStorageBucketsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetObjectStorageBucketsSecurity.prototype, "oauth", void 0);
    return GetObjectStorageBucketsSecurity;
}(SpeakeasyBase));
export { GetObjectStorageBucketsSecurity };
var GetObjectStorageBuckets200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetObjectStorageBuckets200ApplicationJson, _super);
    function GetObjectStorageBuckets200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ObjectStorageBucket }),
        __metadata("design:type", Array)
    ], GetObjectStorageBuckets200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetObjectStorageBuckets200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetObjectStorageBuckets200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetObjectStorageBuckets200ApplicationJson.prototype, "results", void 0);
    return GetObjectStorageBuckets200ApplicationJson;
}(SpeakeasyBase));
export { GetObjectStorageBuckets200ApplicationJson };
var GetObjectStorageBucketsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketsDefaultApplicationJson, _super);
    function GetObjectStorageBucketsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetObjectStorageBucketsDefaultApplicationJson.prototype, "errors", void 0);
    return GetObjectStorageBucketsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetObjectStorageBucketsDefaultApplicationJson };
var GetObjectStorageBucketsRequest = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketsRequest, _super);
    function GetObjectStorageBucketsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageBucketsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageBucketsSecurity)
    ], GetObjectStorageBucketsRequest.prototype, "security", void 0);
    return GetObjectStorageBucketsRequest;
}(SpeakeasyBase));
export { GetObjectStorageBucketsRequest };
var GetObjectStorageBucketsResponse = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketsResponse, _super);
    function GetObjectStorageBucketsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageBucketsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetObjectStorageBucketsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageBuckets200ApplicationJson)
    ], GetObjectStorageBucketsResponse.prototype, "getObjectStorageBuckets200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageBucketsDefaultApplicationJson)
    ], GetObjectStorageBucketsResponse.prototype, "getObjectStorageBucketsDefaultApplicationJsonObject", void 0);
    return GetObjectStorageBucketsResponse;
}(SpeakeasyBase));
export { GetObjectStorageBucketsResponse };
