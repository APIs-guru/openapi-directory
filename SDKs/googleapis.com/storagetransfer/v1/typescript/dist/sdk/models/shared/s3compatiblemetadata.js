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
export var S3CompatibleMetadataAuthMethodEnum;
(function (S3CompatibleMetadataAuthMethodEnum) {
    S3CompatibleMetadataAuthMethodEnum["AuthMethodUnspecified"] = "AUTH_METHOD_UNSPECIFIED";
    S3CompatibleMetadataAuthMethodEnum["AuthMethodAwsSignatureV4"] = "AUTH_METHOD_AWS_SIGNATURE_V4";
    S3CompatibleMetadataAuthMethodEnum["AuthMethodAwsSignatureV2"] = "AUTH_METHOD_AWS_SIGNATURE_V2";
})(S3CompatibleMetadataAuthMethodEnum || (S3CompatibleMetadataAuthMethodEnum = {}));
export var S3CompatibleMetadataListApiEnum;
(function (S3CompatibleMetadataListApiEnum) {
    S3CompatibleMetadataListApiEnum["ListApiUnspecified"] = "LIST_API_UNSPECIFIED";
    S3CompatibleMetadataListApiEnum["ListObjectsV2"] = "LIST_OBJECTS_V2";
    S3CompatibleMetadataListApiEnum["ListObjects"] = "LIST_OBJECTS";
})(S3CompatibleMetadataListApiEnum || (S3CompatibleMetadataListApiEnum = {}));
export var S3CompatibleMetadataProtocolEnum;
(function (S3CompatibleMetadataProtocolEnum) {
    S3CompatibleMetadataProtocolEnum["NetworkProtocolUnspecified"] = "NETWORK_PROTOCOL_UNSPECIFIED";
    S3CompatibleMetadataProtocolEnum["NetworkProtocolHttps"] = "NETWORK_PROTOCOL_HTTPS";
    S3CompatibleMetadataProtocolEnum["NetworkProtocolHttp"] = "NETWORK_PROTOCOL_HTTP";
})(S3CompatibleMetadataProtocolEnum || (S3CompatibleMetadataProtocolEnum = {}));
export var S3CompatibleMetadataRequestModelEnum;
(function (S3CompatibleMetadataRequestModelEnum) {
    S3CompatibleMetadataRequestModelEnum["RequestModelUnspecified"] = "REQUEST_MODEL_UNSPECIFIED";
    S3CompatibleMetadataRequestModelEnum["RequestModelVirtualHostedStyle"] = "REQUEST_MODEL_VIRTUAL_HOSTED_STYLE";
    S3CompatibleMetadataRequestModelEnum["RequestModelPathStyle"] = "REQUEST_MODEL_PATH_STYLE";
})(S3CompatibleMetadataRequestModelEnum || (S3CompatibleMetadataRequestModelEnum = {}));
// S3CompatibleMetadata
/**
 * S3CompatibleMetadata contains the metadata fields that apply to the basic types of S3-compatible data providers.
**/
var S3CompatibleMetadata = /** @class */ (function (_super) {
    __extends(S3CompatibleMetadata, _super);
    function S3CompatibleMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authMethod" }),
        __metadata("design:type", String)
    ], S3CompatibleMetadata.prototype, "authMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listApi" }),
        __metadata("design:type", String)
    ], S3CompatibleMetadata.prototype, "listApi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], S3CompatibleMetadata.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestModel" }),
        __metadata("design:type", String)
    ], S3CompatibleMetadata.prototype, "requestModel", void 0);
    return S3CompatibleMetadata;
}(SpeakeasyBase));
export { S3CompatibleMetadata };
