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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetAttributeNamespaceMetaPathParams = /** @class */ (function (_super) {
    __extends(GetAttributeNamespaceMetaPathParams, _super);
    function GetAttributeNamespaceMetaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=namespace" }),
        __metadata("design:type", String)
    ], GetAttributeNamespaceMetaPathParams.prototype, "namespace", void 0);
    return GetAttributeNamespaceMetaPathParams;
}(SpeakeasyBase));
export { GetAttributeNamespaceMetaPathParams };
var GetAttributeNamespaceMetaSecurity = /** @class */ (function (_super) {
    __extends(GetAttributeNamespaceMetaSecurity, _super);
    function GetAttributeNamespaceMetaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetAttributeNamespaceMetaSecurity.prototype, "basicAuthentication", void 0);
    return GetAttributeNamespaceMetaSecurity;
}(SpeakeasyBase));
export { GetAttributeNamespaceMetaSecurity };
var GetAttributeNamespaceMetaRequest = /** @class */ (function (_super) {
    __extends(GetAttributeNamespaceMetaRequest, _super);
    function GetAttributeNamespaceMetaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAttributeNamespaceMetaPathParams)
    ], GetAttributeNamespaceMetaRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAttributeNamespaceMetaSecurity)
    ], GetAttributeNamespaceMetaRequest.prototype, "security", void 0);
    return GetAttributeNamespaceMetaRequest;
}(SpeakeasyBase));
export { GetAttributeNamespaceMetaRequest };
var GetAttributeNamespaceMetaResponse = /** @class */ (function (_super) {
    __extends(GetAttributeNamespaceMetaResponse, _super);
    function GetAttributeNamespaceMetaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAttributeNamespaceMetaResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAttributeNamespaceMetaResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAttributeNamespaceMetaResponse.prototype, "statusCode", void 0);
    return GetAttributeNamespaceMetaResponse;
}(SpeakeasyBase));
export { GetAttributeNamespaceMetaResponse };
