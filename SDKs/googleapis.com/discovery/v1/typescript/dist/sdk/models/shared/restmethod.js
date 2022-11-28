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
import { JsonSchema } from "./jsonschema";
// RestMethodMediaUploadProtocolsResumable
/**
 * Supports the Resumable Media Upload protocol.
**/
var RestMethodMediaUploadProtocolsResumable = /** @class */ (function (_super) {
    __extends(RestMethodMediaUploadProtocolsResumable, _super);
    function RestMethodMediaUploadProtocolsResumable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multipart" }),
        __metadata("design:type", Boolean)
    ], RestMethodMediaUploadProtocolsResumable.prototype, "multipart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], RestMethodMediaUploadProtocolsResumable.prototype, "path", void 0);
    return RestMethodMediaUploadProtocolsResumable;
}(SpeakeasyBase));
export { RestMethodMediaUploadProtocolsResumable };
// RestMethodMediaUploadProtocolsSimple
/**
 * Supports uploading as a single HTTP request.
**/
var RestMethodMediaUploadProtocolsSimple = /** @class */ (function (_super) {
    __extends(RestMethodMediaUploadProtocolsSimple, _super);
    function RestMethodMediaUploadProtocolsSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multipart" }),
        __metadata("design:type", Boolean)
    ], RestMethodMediaUploadProtocolsSimple.prototype, "multipart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], RestMethodMediaUploadProtocolsSimple.prototype, "path", void 0);
    return RestMethodMediaUploadProtocolsSimple;
}(SpeakeasyBase));
export { RestMethodMediaUploadProtocolsSimple };
// RestMethodMediaUploadProtocols
/**
 * Supported upload protocols.
**/
var RestMethodMediaUploadProtocols = /** @class */ (function (_super) {
    __extends(RestMethodMediaUploadProtocols, _super);
    function RestMethodMediaUploadProtocols() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resumable" }),
        __metadata("design:type", RestMethodMediaUploadProtocolsResumable)
    ], RestMethodMediaUploadProtocols.prototype, "resumable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=simple" }),
        __metadata("design:type", RestMethodMediaUploadProtocolsSimple)
    ], RestMethodMediaUploadProtocols.prototype, "simple", void 0);
    return RestMethodMediaUploadProtocols;
}(SpeakeasyBase));
export { RestMethodMediaUploadProtocols };
// RestMethodMediaUpload
/**
 * Media upload parameters.
**/
var RestMethodMediaUpload = /** @class */ (function (_super) {
    __extends(RestMethodMediaUpload, _super);
    function RestMethodMediaUpload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accept" }),
        __metadata("design:type", Array)
    ], RestMethodMediaUpload.prototype, "accept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxSize" }),
        __metadata("design:type", String)
    ], RestMethodMediaUpload.prototype, "maxSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocols" }),
        __metadata("design:type", RestMethodMediaUploadProtocols)
    ], RestMethodMediaUpload.prototype, "protocols", void 0);
    return RestMethodMediaUpload;
}(SpeakeasyBase));
export { RestMethodMediaUpload };
// RestMethodRequest
/**
 * The schema for the request.
**/
var RestMethodRequest = /** @class */ (function (_super) {
    __extends(RestMethodRequest, _super);
    function RestMethodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=$ref" }),
        __metadata("design:type", String)
    ], RestMethodRequest.prototype, "dollarRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameterName" }),
        __metadata("design:type", String)
    ], RestMethodRequest.prototype, "parameterName", void 0);
    return RestMethodRequest;
}(SpeakeasyBase));
export { RestMethodRequest };
// RestMethodResponse
/**
 * The schema for the response.
**/
var RestMethodResponse = /** @class */ (function (_super) {
    __extends(RestMethodResponse, _super);
    function RestMethodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=$ref" }),
        __metadata("design:type", String)
    ], RestMethodResponse.prototype, "dollarRef", void 0);
    return RestMethodResponse;
}(SpeakeasyBase));
export { RestMethodResponse };
var RestMethod = /** @class */ (function (_super) {
    __extends(RestMethod, _super);
    function RestMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], RestMethod.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etagRequired" }),
        __metadata("design:type", Boolean)
    ], RestMethod.prototype, "etagRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flatPath" }),
        __metadata("design:type", String)
    ], RestMethod.prototype, "flatPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpMethod" }),
        __metadata("design:type", String)
    ], RestMethod.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RestMethod.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaUpload" }),
        __metadata("design:type", RestMethodMediaUpload)
    ], RestMethod.prototype, "mediaUpload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameterOrder" }),
        __metadata("design:type", Array)
    ], RestMethod.prototype, "parameterOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: JsonSchema }),
        __metadata("design:type", Map)
    ], RestMethod.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], RestMethod.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", RestMethodRequest)
    ], RestMethod.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", RestMethodResponse)
    ], RestMethod.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], RestMethod.prototype, "scopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportsMediaDownload" }),
        __metadata("design:type", Boolean)
    ], RestMethod.prototype, "supportsMediaDownload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportsMediaUpload" }),
        __metadata("design:type", Boolean)
    ], RestMethod.prototype, "supportsMediaUpload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportsSubscription" }),
        __metadata("design:type", Boolean)
    ], RestMethod.prototype, "supportsSubscription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useMediaDownloadService" }),
        __metadata("design:type", Boolean)
    ], RestMethod.prototype, "useMediaDownloadService", void 0);
    return RestMethod;
}(SpeakeasyBase));
export { RestMethod };
