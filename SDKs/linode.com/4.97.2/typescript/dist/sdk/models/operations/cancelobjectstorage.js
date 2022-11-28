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
export var CancelObjectStorageServerList = [
    "https://api.linode.com/v4",
];
var CancelObjectStorageSecurity = /** @class */ (function (_super) {
    __extends(CancelObjectStorageSecurity, _super);
    function CancelObjectStorageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CancelObjectStorageSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CancelObjectStorageSecurity.prototype, "oauth", void 0);
    return CancelObjectStorageSecurity;
}(SpeakeasyBase));
export { CancelObjectStorageSecurity };
var CancelObjectStorageDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CancelObjectStorageDefaultApplicationJson, _super);
    function CancelObjectStorageDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CancelObjectStorageDefaultApplicationJson.prototype, "errors", void 0);
    return CancelObjectStorageDefaultApplicationJson;
}(SpeakeasyBase));
export { CancelObjectStorageDefaultApplicationJson };
var CancelObjectStorageRequest = /** @class */ (function (_super) {
    __extends(CancelObjectStorageRequest, _super);
    function CancelObjectStorageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CancelObjectStorageRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelObjectStorageSecurity)
    ], CancelObjectStorageRequest.prototype, "security", void 0);
    return CancelObjectStorageRequest;
}(SpeakeasyBase));
export { CancelObjectStorageRequest };
var CancelObjectStorageResponse = /** @class */ (function (_super) {
    __extends(CancelObjectStorageResponse, _super);
    function CancelObjectStorageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CancelObjectStorageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CancelObjectStorageResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CancelObjectStorageResponse.prototype, "cancelObjectStorage200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelObjectStorageDefaultApplicationJson)
    ], CancelObjectStorageResponse.prototype, "cancelObjectStorageDefaultApplicationJsonObject", void 0);
    return CancelObjectStorageResponse;
}(SpeakeasyBase));
export { CancelObjectStorageResponse };
